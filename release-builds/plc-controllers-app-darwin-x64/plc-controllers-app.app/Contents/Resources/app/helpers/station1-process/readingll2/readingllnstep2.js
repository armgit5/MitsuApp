const STATION1 = require('../../../data/station1');
const Store = require('electron-store');
const store = new Store();

module.exports = (mainWindow, data) => {
    let onHH = -1;
    let onMM = -1;
    let onSS = -1;
    let offHH = -1;
    let offMM = -1;
    let offSS = -1;
    const STEP = STATION1.datetime.ll2.step2;
    
     // STEP 1
     let onHHResult = data[STEP.onHH];
     if (onHHResult !== onHH) {
         onHH = onHHResult;
         store.set(STEP.onHH, onHH); 
         mainWindow.webContents.send(STEP.onHH, onHH);
     }
     let onMMResult = data[STEP.onMM];
     if (onMMResult !== onMM) {
         onMM = onMMResult;
         store.set(STEP.onMM, onMM); 
         mainWindow.webContents.send(STEP.onMM, onMM);
     }
     let onSSResult = data[STEP.onSS];
     if (onSSResult !== onSS) {
         onSS = onSSResult;
         store.set(STEP.onSS, onSS); 
         mainWindow.webContents.send(STEP.onSS, onSS);
     }
     let offHHResult = data[STEP.offHH];
     if (offHHResult !== offHH) {
         offHH = offHHResult;
         store.set(STEP.offHH, offHH); 
         mainWindow.webContents.send(STEP.offHH, offHH);
     }
     let offMMResult = data[STEP.offMM];
     if (offMMResult !== offMM) {
         offMM = offMMResult;
         store.set(STEP.offMM, offMM);
         mainWindow.webContents.send(STEP.offMM, offMM);
     }
     let offSSResult = data[STEP.offSS];
     if (offSSResult !== offSS) {
         offSS = offSSResult;
         store.set(STEP.offSS, offSS);
         mainWindow.webContents.send(STEP.offSS, offSS);
     }
}