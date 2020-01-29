const { ipcMain } = require('electron');
const writeHelper = require('../writeHelper');
const readHelper = require('../readHelper');
const { CHANNELS, SCANTIME } = require('../environments');
const STATION1 = require('../../data/station1');

module.exports = (NODE) => {

    // ll1
    ipcMain.on(CHANNELS.ll1On, (e, _) => {

        writeHelper(NODE, STATION1.bits.ll1On, true)
            .then(_ => {
                readHelper(NODE).then(data => {
                    console.log(data);
                });
                return writeHelper(NODE, STATION1.bits.ll1On, false);
            })
            .then(_ => {
                readHelper(NODE).then(data => {
                    console.log(data);
                });
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll1Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll1Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll1Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll2
    ipcMain.on(CHANNELS.ll2On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll2On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll2On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll2Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll2Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll2Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll3
    ipcMain.on(CHANNELS.ll3On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll3On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll3On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll3Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll3Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll3Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });


    // ll4
    ipcMain.on(CHANNELS.ll4On, (e, status) => {
        console.log('ll4 on');
        writeHelper(NODE, STATION1.bits.ll4On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll4On, false);
            })
            .then(_ => {
                
            })
            .catch(err => {
                console.log(err);
            });

            readHelper(NODE, data => {
                console.log(data);
            });
    });

    ipcMain.on(CHANNELS.ll4Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll4Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll4Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });


    // ll5
    ipcMain.on(CHANNELS.ll5On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll5On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll5On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll5Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll5Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll5Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll6
    ipcMain.on(CHANNELS.ll6On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll6On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll6On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll6Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll6Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll6Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });


    // ll7
    ipcMain.on(CHANNELS.ll7On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll7On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll7On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll7Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll7Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll7Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll8
    ipcMain.on(CHANNELS.ll8On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll8On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll8On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll8Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll8Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll8Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });


    // ll9
    ipcMain.on(CHANNELS.ll9On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll9On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll9On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll9Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll9Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll9Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll10
    ipcMain.on(CHANNELS.ll10On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll10On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll10On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll10Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll10Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll10Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll11
    ipcMain.on(CHANNELS.ll11On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll11On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll11On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll11Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll11Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll11Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll12
    ipcMain.on(CHANNELS.ll12On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll12On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll12On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll12Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll12Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll12Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll13
    ipcMain.on(CHANNELS.ll13On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll13On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll13On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll13Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll13Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll13Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll14
    ipcMain.on(CHANNELS.ll14On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll14On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll14On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll14Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll14Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll14Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    // ll15
    ipcMain.on(CHANNELS.ll15On, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll15On, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll15On, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });

    ipcMain.on(CHANNELS.ll15Off, (e, status) => {
        writeHelper(NODE, STATION1.bits.ll15Off, true)
            .then(_ => {
                return writeHelper(NODE, STATION1.bits.ll15Off, false);
            })
            .then(_ => {
            })
            .catch(err => {
                console.log(err);
            });
    });
}