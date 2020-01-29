
const STATION1 = require('../../data/station1');
const Store = require('electron-store');
const store = new Store();

module.exports = (mainWindow, data) => {
    let step1OnHH = -1;
    let step1OnMM = -1;
    let step1OnSS = -1;
    let step1OffHH = -1;
    let step1OffMM = -1;
    let step1OffSS = -1;
    const LL1 = STATION1.datetime.ll1;
 
     // STEP 1
     let step1OnHHResult = data[LL1.step1.onHH];
     if (step1OnHHResult !== step1OnHH) {
         step1OnHH = step1OnHHResult;
         store.set(LL1.step1.onHH, step1OnHH); // Store result
         mainWindow.webContents.send(LL1.step1.onHH, step1OnHH);
     }
     let step1OnMMResult = data[LL1.step1.onMM];
     if (step1OnMMResult !== step1OnMM) {
         step1OnMM = step1OnMMResult;
         store.set(LL1.step1.onMM, step1OnMM);
         mainWindow.webContents.send(LL1.step1.onMM, step1OnMM);
     }
     let step1OnSSResult = data[LL1.step1.onSS];
     if (step1OnSSResult !== step1OnSS) {
         step1OnSS = step1OnSSResult;
         store.set(LL1.step1.onSS, step1OnSS);
         mainWindow.webContents.send(LL1.step1.onSS, step1OnSS);
     }
     let step1OffHHResult = data[LL1.step1.offHH];
     if (step1OffHHResult !== step1OffHH) {
         step1OffHH = step1OffHHResult;
         store.set(LL1.step1.offHH, step1OffHH);
         mainWindow.webContents.send(LL1.step1.offHH, step1OffHH);
     }
     let step1OffMMResult = data[LL1.step1.offMM];
     if (step1OffMMResult !== step1OffMM) {
         step1OffMM = step1OffMMResult;
         store.set(LL1.step1.offMM, step1OffMM);
         mainWindow.webContents.send(LL1.step1.offMM, step1OffMM);
     }
     let step1OffSSResult = data[LL1.step1.offSS];
     if (step1OffSSResult !== step1OffSS) {
         step1OffSS = step1OffSSResult;
         store.set(LL1.step1.offSS, step1OffSS);
         mainWindow.webContents.send(LL1.step1.offSS, step1OffSS);
     }
};