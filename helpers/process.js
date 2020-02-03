const { ipcMain } = require('electron');

var mc = require('mcprotocol');
var conn = new mc;
var doneReading = false;
var doneWriting = false;								// See setTranslationCB below for more examples
const { machine, commChannels } = require('./environments');
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
	// if (doneWriting) { process.exit(); }
}

function valuesWritten(anythingBad) {
	if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
	console.log("Done writing.");
	doneWriting = true;
	// if (doneReading) { process.exit(); }
}

module.exports = (mainWindow) => {
    console.log('staring process');

    // Starting the machine
    ipcMain.on(commChannels.start, (e, isOn) => {
        console.log('isOn ', isOn);
        doneReading = false;
        doneWriting = false;

        writeHelper(conn, machine.startRegister, 1)
            .then(register => {
                console.log('write to ', register);
                return writeHelper(conn, machine.startRegister, 0);
            })
            .then(register => {
                console.log('write to ', register);
            });
        
    });

    // Stopping the machine
    ipcMain.on(commChannels.stop, (e, isOff) => {
        console.log('isOff ', isOff);
        conn.writeItems(machine.stopRegister, 1, (anythingBad) => {
        });

        setTimeout(() => {
            conn.writeItems(machine.stopRegister, 0, function(anythingBad) {
                conn.readAllItems(valuesReady);
            });
        }, 1000);
    });

    ipcMain.on('speed1', (e, speed1) => {
        console.log('speed1 ', speed1);
        conn.writeItems(machine.speed1Register, speed1, valuesWritten);
    });
    
    ipcMain.on('torque1', (e, torque1) => {
        console.log('torque1 ', torque1);
        conn.writeItems(machine.torque1Register, torque1, valuesWritten);
    });
};