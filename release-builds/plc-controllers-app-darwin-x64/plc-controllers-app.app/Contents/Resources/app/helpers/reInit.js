
const { CHANNELS, SCANTIME } = require('./environments');
const readHelper = require('./readHelper');
const Store = require('electron-store');
const store = new Store();

const M217_0 = 'M217.0';
const M217_2 = 'M217.2';
const M217_3 = 'M217.3';
const M217_4 = 'M217.4';
const M217_5 = 'M217.5';
const M217_6 = 'M217.6';
const M217_7 = 'M217.7';

const M218_0 = 'M218.0';
const M218_1 = 'M218.1';
const M218_2 = 'M218.2';
const M218_3 = 'M218.3';


module.exports = (mainWindow, NodeId, initAll) => {

    if (NodeId === 'N1' || initAll) {
        store.set('S1_M217_0', false);
        mainWindow.webContents.send(CHANNELS.onStation1, { M217_0: false, blink: true });
    }

    if (NodeId === 'N2' || initAll) {
        console.log('N2 fault');
        store.set('S2_M218_2', false);
        mainWindow.webContents.send(CHANNELS.onStation2, { M218_2: false, blink: true });

        store.set('S2_M217_2', false);
        mainWindow.webContents.send(CHANNELS.onStation2, { M217_2: false, blink: true });

        store.set('S2_M217_3', false);
        mainWindow.webContents.send(CHANNELS.onStation2, { M217_3: false, blink: true });

        store.set('S2_M217_4', false);
        mainWindow.webContents.send(CHANNELS.onStation2, { M217_4: false, blink: true });
    }

    if (NodeId === 'N3' || initAll) {
        store.set('S3_M217_0', false);
        mainWindow.webContents.send(CHANNELS.onStation3, { M217_0: false, blink: true });
    }

    if (NodeId === 'N4' || initAll) {
        store.set('S4_M218_2', false);
        mainWindow.webContents.send(CHANNELS.onStation4, { M218_2: false, blink: true });

        store.set('S4_M217_2', false);
        mainWindow.webContents.send(CHANNELS.onStation4, { M217_2: false, blink: true });

        store.set('S4_M217_3', false);
        mainWindow.webContents.send(CHANNELS.onStation4, { M217_3: false, blink: true });

        store.set('S4_M217_4', false);
        mainWindow.webContents.send(CHANNELS.onStation4, { M217_4: false, blink: true });
    }

    if (NodeId === 'N5' || initAll) {

        store.set('S5_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation5, { M218_3: false, blink: true });

        store.set('S5_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation5, { M217_5: false, blink: true });

        store.set('S5_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation5, { M217_6: false, blink: true });

        store.set('S5_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation5, { M217_7: false, blink: true });

        store.set('S5_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation5, { M218_0: false, blink: true });

        store.set('S5_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation5, { M218_1: false, blink: true });
    }

    if (NodeId === 'N6' || initAll) {
        store.set('S6_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation6, { M218_3: false, blink: true });

        store.set('S6_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation6, { M217_5: false, blink: true });

        store.set('S6_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation6, { M217_6: false, blink: true });

        store.set('S6_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation6, { M217_7: false, blink: true });

        store.set('S6_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation6, { M218_0: false, blink: true });

        store.set('S6_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation6, { M218_1: false, blink: true });

    }

    if (NodeId === 'N7' || initAll) {

        store.set('S7_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M218_3: false, blink: true });

        store.set('S7_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M217_5: false, blink: true });

        store.set('S7_M217_6', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M217_6: false, blink: true })

        store.set('S7_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M217_7: false, blink: true });

        store.set('S7_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M218_0: false, blink: true });

        store.set('S7_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation7, { M218_1: false, blink: true });

    }

    if (NodeId === 'N8' || initAll) {

        store.set('S8_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation8, { M218_3: false, blink: true });

        store.set('S8_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation8, { M217_5: false, blink: true });

        store.set('S8_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation8, { M217_6: false, blink: true });

        store.set('S8_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation8, { M217_7: false, blink: true });

        store.set('S8_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation8, { M218_0: false, blink: true });

        store.set('S8_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation8, { M218_1: false, blink: true });
    }

    if (NodeId === 'N9' || initAll) {
        store.set('S9_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation9, { M218_3: false, blink: true });

        store.set('S9_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation9, { M217_5: false, blink: true });

        store.set('S9_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation9, { M217_6: false, blink: true });

        store.set('S9_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation9, { M217_7: false, blink: true });

        store.set('S9_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation9, { M218_0: false, blink: true });

        store.set('S9_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation9, { M218_1: false, blink: true });
    }

    if (NodeId === 'N10' || initAll) {

        store.set('S10_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation10, { M218_3: false, blink: true });

        store.set('S10_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation10, { M217_5: false, blink: true });

        store.set('S10_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation10, { M217_6: false, blink: true });

        store.set('S10_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation10, { M217_7: false, blink: true });

        store.set('S10_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation10, { M218_0: false, blink: true });

        store.set('S10_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation10, { M218_1: false, blink: true });
    }

    if (NodeId === 'N11' || initAll) {
        store.set('S11_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation11, { M218_3: false, blink: true });

        store.set('S11_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation11, { M217_5: false, blink: true });

        store.set('S11_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation11, { M217_6: false, blink: true });

        store.set('S11_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation11, { M217_7: false, blink: true });

        store.set('S11_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation11, { M218_0: false, blink: true });

        store.set('S11_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation11, { M218_1: false, blink: true });
    }

    if (NodeId === 'N12' || initAll) {

        store.set('S12_M218_3', false);
        mainWindow.webContents.send(CHANNELS.onStation12, { M218_3: false, blink: true });

        store.set('S12_M217_5', false);
        mainWindow.webContents.send(CHANNELS.onStation12, { M217_5: false, blink: true });

        store.set('S12_M217_6', false)
        mainWindow.webContents.send(CHANNELS.onStation12, { M217_6: false, blink: true });

        store.set('S12_M217_7', false);
        mainWindow.webContents.send(CHANNELS.onStation12, { M217_7: false, blink: true });

        store.set('S12_M218_0', false);
        mainWindow.webContents.send(CHANNELS.onStation12, { M218_0: false, blink: true });

        store.set('S12_M218_1', false);
        mainWindow.webContents.send(CHANNELS.onStation12, { M218_1: false, blink: true });
    }

};



