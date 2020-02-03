const { ipcMain } = require('electron');

var mc = require('mcprotocol');
var conn = new mc;
var doneReading = false;
var doneWriting = false;								// See setTranslationCB below for more examples
const { machine } = require('./environments');
const writeHelper = require('./writeHelper');

conn.initiateConnection({port: 1281, host: '192.168.0.100', ascii: false}, connected); 

function addAllItems() {
    for (const key in machine) {
        conn.addItems(machine[key]);
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
	doneReading = true;
}

function valuesWritten(anythingBad) {
	if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
	console.log("Done writing.");
	doneWriting = true;
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

    ipcMain.on(machine.speed, (e, speed) => {
        conn.writeItems(machine.unwindSpeed, speed, valuesWritten);
    });
    
    ipcMain.on(machine.torque, (e, torque) => {
        conn.writeItems(machine.unwindTorque, torque, valuesWritten);
    });
};