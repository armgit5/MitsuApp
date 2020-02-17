const { ipcMain } = require('electron');

var mc = require('mcprotocol');
var conn = new mc; // See setTranslationCB below for more examples
const { machine } = require('./environments');
const writeHelper = require('./writeHelper');
const subscribeRegisters = require('./subscribeRegisters');

let MACHINE_SPEED = 0;

conn.initiateConnection({port: 1281, host: '192.168.0.100', ascii: false}, connected); 

function addAllItems() {
    for (const key in machine) {
        if (key != 'notRealRegisters') {
            conn.addItems(machine[key]);
        }
    }
}

function connected(err) {
	if (typeof(err) !== "undefined") {
		// We have an error.  Maybe the PLC is not reachable.  
		console.log(err);
		process.exit();
    }	
    addAllItems();
}

function valuesReady(anythingBad, values) {
	if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
	console.log(values);
}

function valuesWritten(anythingBad) {
	if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
	console.log("Done writing.");
}

module.exports = (mainWindow) => {
    console.log('staring process');

    // Starting the machine
    ipcMain.on(machine.start, (e, isOn) => {
        doneReading = false;
        doneWriting = false;
        console.log('start ', isOn);

        writeHelper(conn, machine.start, 1)
            .then(register => {
                return writeHelper(conn, machine.start, 0);
            })
            .then(register => {
            });
        
        subscribeRegisters(conn, machine.unwindSpeed);
    });

    // Stopping the machine
    ipcMain.on(machine.stop, (e, isOff) => {
        console.log('stop ', isOff);
        writeHelper(conn, machine.stop, 1)
            .then(register => {
                return writeHelper(conn, machine.stop, 0);
            })
            .then(register => {
            });
    });

    ipcMain.on(machine.notRealRegisters.speed, (e, speed) => {
        MACHINE_SPEED = speed;
        conn.writeItems(machine.unwindSpeed, MACHINE_SPEED, valuesWritten);
        writeHelper(conn, machine.unwindSpeed, MACHINE_SPEED).then(register => {
            console.log('write to ', register);
        });
    });

    ipcMain.on(machine.notRealRegisters.speedUp, (e, isSet) => {
        console.log('speed up');

        let doneWriting;
        MACHINE_SPEED += 100;

        if (doneWriting === undefined || doneWriting) {
            doneWriting = false;
            writeHelper(conn, machine.unwindSpeed, MACHINE_SPEED).then(register => {
                console.log('write to ', register, MACHINE_SPEED);
                doneWriting = true;
            });
        }
    });

    ipcMain.on(machine.notRealRegisters.speedUpVal, (e, val) => {
        console.log('speed up val ', val);

        let doneWriting;
        let doneWriting2;

        if (doneWriting === undefined || doneWriting) {
            doneWriting = false;
            writeHelper(conn, machine.unwindSpeed, val).then(register => {
                console.log('write to ', register, val);
                // doneWriting = true;
                return writeHelper(conn, machine.rewindSpeed, val);
            })
            .then(register => {
                console.log('write to ', register, val);
                doneWriting = true;
            });
        }

        if (doneWriting2 === undefined || doneWriting2) {
            doneWriting2 = false;
            
        }
    });

    ipcMain.on(machine.notRealRegisters.speedDown, (e, isSet) => {
        console.log('speed down');

        let doneWriting;
        MACHINE_SPEED -= 100;

        if (doneWriting === undefined || doneWriting) {
            doneWriting = false;
            writeHelper(conn, machine.unwindSpeed, MACHINE_SPEED).then(register => {
                console.log('write to ', register, MACHINE_SPEED);
                doneWriting = true;
            });
        }
    });
    
    ipcMain.on(machine.notRealRegisters.torque, (e, torque) => {
        conn.writeItems(machine.unwindTorque, torque, valuesWritten);
    });
};