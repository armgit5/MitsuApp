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

    // Reverse
    ipcMain.on(machine.commChannels.reverse, (e, tick) => {
        console.log('reverse ', tick);
        writeHelper(conn, machine.reverse, 1)
            .then(_ => {
                return writeHelper(conn, machine.reverse, 0);
            })
            .then(_ => {
            });
    });

    // Speed down
    ipcMain.on(machine.commChannels.speedDown, (e, tick) => {
        console.log('speed down ', tick);
        writeHelper(conn, machine.speedDown, 1)
            .then(_ => {
                return writeHelper(conn, machine.speedDown, 0);
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

    // Speed down
    ipcMain.on(machine.commChannels.speedUp, (e, tick) => {
        console.log('speed up ', tick);
        writeHelper(conn, machine.speedUp, 1)
            .then(_ => {
                return writeHelper(conn, machine.speedUp, 0);
            })
            .then(_ => {
            });
    });

    // Forward
    ipcMain.on(machine.commChannels.forward, (e, tick) => {
        console.log('speed up ', tick);
        writeHelper(conn, machine.forward, 1)
            .then(_ => {
                return writeHelper(conn, machine.forward, 0);
            })
            .then(_ => {
            });
    });

};