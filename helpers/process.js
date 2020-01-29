const { ipcMain } = require('electron');

var mc = require('mcprotocol');
var conn = new mc;
var doneReading = false;
var doneWriting = false;								// See setTranslationCB below for more examples
var startRegister = 'M00';
var stopRegister = 'M10';
var speed1Register = 'D01';
var torque1Register = 'D00';

conn.initiateConnection({port: 1281, host: '192.168.0.100', ascii: false}, connected); 

function connected(err) {
	if (typeof(err) !== "undefined") {
		// We have an error.  Maybe the PLC is not reachable.  
		console.log(err);
		process.exit();
    }	
	
    conn.addItems(startRegister);
    conn.addItems(stopRegister);
    conn.addItems(speed1Register);
    conn.addItems(torque1Register);
	conn.readAllItems(valuesReady);	
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

    ipcMain.on('start', (e, isOn) => {
        console.log('isOn ', isOn);
        conn.writeItems(startRegister, 1, function(anythingBad) {
            conn.readAllItems(valuesReady);
        });

        setTimeout(() => {
            conn.writeItems(startRegister, 0, function(anythingBad) {
                conn.readAllItems(valuesReady);
            });
        }, 1000);
        
    });

    ipcMain.on('stop', (e, isOff) => {
        console.log('isOff ', isOff);
        conn.writeItems(stopRegister, 1, (anythingBad) => {
        });

        setTimeout(() => {
            conn.writeItems(stopRegister, 0, function(anythingBad) {
                conn.readAllItems(valuesReady);
            });
        }, 1000);
    });

    ipcMain.on('speed1', (e, speed1) => {
        console.log('speed1 ', speed1);
        conn.writeItems(speed1Register, speed1, valuesWritten);
    });
    
    ipcMain.on('torque1', (e, torque1) => {
        console.log('torque1 ', torque1);
        conn.writeItems(torque1Register, torque1, valuesWritten);
    });
};