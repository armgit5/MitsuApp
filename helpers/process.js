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
        if (key != 'commChannels') {
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

    // increaseRightSpeed
    ipcMain.on(machine.commChannels.increaseRightSpeed, (e, tick) => {
        console.log('increaseRightSpeed ', tick);
        writeHelper(conn, machine.increaseRightSpeed, 1)
            .then(_ => {
                return writeHelper(conn, machine.increaseRightSpeed, 0);
            })
            .then(_ => {
            });
    });

    // decreaseRightSpeed
    ipcMain.on(machine.commChannels.decreaseRightSpeed, (e, tick) => {
        console.log('decreaseRightSpeed ', tick);
        writeHelper(conn, machine.decreaseRightSpeed, 1)
            .then(_ => {
                return writeHelper(conn, machine.decreaseRightSpeed, 0);
            })
            .then(_ => {
            });
    });

    // Stopping the machine
    ipcMain.on(machine.commChannels.stop, (e, isOff) => {
        console.log('stop ', isOff);
        writeHelper(conn, machine.stop, 1)
            .then(_ => {
                return writeHelper(conn, machine.stop, 0);
            })
            .then(_ => {
            });
    });

    // increaseLeftSpeed
    ipcMain.on(machine.commChannels.increaseLeftSpeed, (e, tick) => {
        console.log('increaseLeftSpeed ', tick);
        writeHelper(conn, machine.increaseLeftSpeed, 1)
            .then(_ => {
                return writeHelper(conn, machine.increaseLeftSpeed, 0);
            })
            .then(_ => {
            });
    });

    // decreaseLeftSpeed
    ipcMain.on(machine.commChannels.decreaseLeftSpeed, (e, tick) => {
        console.log('decreaseLeftSpeed ', tick);
        writeHelper(conn, machine.decreaseLeftSpeed, 1)
            .then(_ => {
                return writeHelper(conn, machine.decreaseLeftSpeed, 0);
            })
            .then(_ => {
            });
    });

};