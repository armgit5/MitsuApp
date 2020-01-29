const STATION1 = require('../../../data/station1');
const { ipcMain } = require('electron');
const writeHelper = require('../../writeHelper');

module.exports = (NODE) => {

    // On
    const onHH = STATION1.datetime.ll15.step1.onHH;
    const onHHTimer = STATION1.datetime.ll15.step1.onHHTimer;
    ipcMain.on(onHH, (e, data) => {
        writeHelper(NODE, onHH, data)
            .then(_ => {
                return writeHelper(NODE, onHHTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, onHHTimer, false);
            })
            .then(_ => {
                
            });
    }); 

    const onMM = STATION1.datetime.ll15.step1.onMM;
    const onMMTimer = STATION1.datetime.ll15.step1.onMMTimer;
    ipcMain.on(onMM, (e, data) => {
        writeHelper(NODE, onMM, data)
            .then(_ => {
                return writeHelper(NODE, onMMTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, onMMTimer, false);
            })
            .then(_ => {
                
            });
    }); 

    const onSS = STATION1.datetime.ll15.step1.onSS;
    const onSSTimer = STATION1.datetime.ll15.step1.onSSTimer;
    ipcMain.on(onSS, (e, data) => {
        writeHelper(NODE, onSS, data)
            .then(_ => {
                return writeHelper(NODE, onSSTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, onSSTimer, false);
            })
            .then(_ => {
                
            });
    }); 

    // Off
    const offHH = STATION1.datetime.ll15.step1.offHH;
    const offHHTimer = STATION1.datetime.ll15.step1.offHHTimer;
    ipcMain.on(offHH, (e, data) => {
        writeHelper(NODE, offHH, data)
            .then(_ => {
                return writeHelper(NODE, offHHTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, offHHTimer, false);
            })
            .then(_ => {
                
            });
    }); 

    const offMM = STATION1.datetime.ll15.step1.offMM;
    const offMMTimer = STATION1.datetime.ll15.step1.offMMTimer;
    ipcMain.on(offMM, (e, data) => {
        writeHelper(NODE, offMM, data)
            .then(_ => {
                return writeHelper(NODE, offMMTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, offMMTimer, false);
            })
            .then(_ => {
                
            });
    }); 

    const offSS = STATION1.datetime.ll15.step1.offSS;
    const offSSTimer = STATION1.datetime.ll15.step1.offSSTimer;
    ipcMain.on(offSS, (e, data) => {
        writeHelper(NODE, offSS, data)
            .then(_ => {
                return writeHelper(NODE, offSSTimer, true);
            })
            .then(_ => {
                return writeHelper(NODE, offSSTimer, false);
            })
            .then(_ => {
                
            });
    }); 


};