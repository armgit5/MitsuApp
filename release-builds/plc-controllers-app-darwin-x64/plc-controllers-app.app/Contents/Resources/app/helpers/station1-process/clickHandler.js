const { ipcMain } = require('electron');
const { CHANNELS, SCANTIME, CHANNELS2 } = require('../environments');
const STATION1 = require('../../data/station1');

const Store = require('electron-store');
const store = new Store();

const writeHelper = require('../writeHelper');
const readHelper = require('../readHelper');

module.exports = (NODE, mainWindow) => {

    require('./clickllOnOff')(NODE);

    // Set automanual
    ipcMain.on(CHANNELS.autoManual, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual, false);
            })
            .then(_ => {
            });
    });

    ipcMain.on(CHANNELS.autoManual2, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual2, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual2, false);
            })
            .then(_ => {
            });
    });

    ipcMain.on(CHANNELS.autoManual3, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual3, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual3, false);
            })
            .then(_ => {
            });
    });

    ipcMain.on(CHANNELS2.autoManual3, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual3, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual4, true)
            })
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual3, false);
            })
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual4, false);
            })
            .then(_ => {
            });
    });

    ipcMain.on(CHANNELS.autoManual4, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual4, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual4, false);
            })
            .then(_ => {
            });
    });

    ipcMain.on(CHANNELS.autoManual5, (e, autoManual) => {
        writeHelper(NODE, STATION1.datetime.header.setAutoManual5, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.datetime.header.setAutoManual5, false);
            })
            .then(_ => {
            });
    });

    // LL1 clicks
    require('./clickll1step1')(NODE);
    require('./clickll1step2')(NODE);
    require('./clickll1step3')(NODE);
    require('./clickll1step4')(NODE);

    // LL2 clicks
    require('./clickll2/clickllnstep1')(NODE);
    require('./clickll2/clickllnstep2')(NODE);
    require('./clickll2/clickllnstep3')(NODE);
    require('./clickll2/clickllnstep4')(NODE);

    // LL3 clicks
    require('./clickll3/clickllnstep1')(NODE);
    require('./clickll3/clickllnstep2')(NODE);
    require('./clickll3/clickllnstep3')(NODE);
    require('./clickll3/clickllnstep4')(NODE);

    // LL4 clicks
    require('./clickll4/clickllnstep1')(NODE);
    require('./clickll4/clickllnstep2')(NODE);
    require('./clickll4/clickllnstep3')(NODE);
    require('./clickll4/clickllnstep4')(NODE);

    // LL5 clicks
    require('./clickll5/clickllnstep1')(NODE);
    require('./clickll5/clickllnstep2')(NODE);
    require('./clickll5/clickllnstep3')(NODE);
    require('./clickll5/clickllnstep4')(NODE);

    // LL6 clicks
    require('./clickll6/clickllnstep1')(NODE);
    require('./clickll6/clickllnstep2')(NODE);
    require('./clickll6/clickllnstep3')(NODE);
    require('./clickll6/clickllnstep4')(NODE);

    // LL7 clicks
    require('./clickll7/clickllnstep1')(NODE);
    require('./clickll7/clickllnstep2')(NODE);
    require('./clickll7/clickllnstep3')(NODE);
    require('./clickll7/clickllnstep4')(NODE);

    // LL8 clicks
    require('./clickll8/clickllnstep1')(NODE);
    require('./clickll8/clickllnstep2')(NODE);
    require('./clickll8/clickllnstep3')(NODE);
    require('./clickll8/clickllnstep4')(NODE);

    // LL9 clicks
    require('./clickll9/clickllnstep1')(NODE);
    require('./clickll9/clickllnstep2')(NODE);
    require('./clickll9/clickllnstep3')(NODE);
    require('./clickll9/clickllnstep4')(NODE);

    // LL10 clicks
    require('./clickll10/clickllnstep1')(NODE);
    require('./clickll10/clickllnstep2')(NODE);
    require('./clickll10/clickllnstep3')(NODE);
    require('./clickll10/clickllnstep4')(NODE);

    // LL11 clicks
    require('./clickll11/clickllnstep1')(NODE);
    require('./clickll11/clickllnstep2')(NODE);
    require('./clickll11/clickllnstep3')(NODE);
    require('./clickll11/clickllnstep4')(NODE);

    // LL12 clicks
    require('./clickll12/clickllnstep1')(NODE);
    require('./clickll12/clickllnstep2')(NODE);
    require('./clickll12/clickllnstep3')(NODE);
    require('./clickll12/clickllnstep4')(NODE);

    // LL13 clicks
    require('./clickll13/clickllnstep1')(NODE);
    require('./clickll13/clickllnstep2')(NODE);
    require('./clickll13/clickllnstep3')(NODE);
    require('./clickll13/clickllnstep4')(NODE);

    // LL14 clicks
    require('./clickll14/clickllnstep1')(NODE);
    require('./clickll14/clickllnstep2')(NODE);
    require('./clickll14/clickllnstep3')(NODE);
    require('./clickll14/clickllnstep4')(NODE);

    // LL15 clicks
    require('./clickll15/clickllnstep1')(NODE);
    require('./clickll15/clickllnstep2')(NODE);
    require('./clickll15/clickllnstep3')(NODE);
    require('./clickll15/clickllnstep4')(NODE);
}
