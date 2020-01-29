const { ipcMain } = require('electron');
const { CHANNELS, SCANTIME, monthNames } = require('../environments');
const STATION1 = require('../../data/station1');
const readHelper = require('../readHelper');
const Store = require('electron-store');
const store = new Store();

const INTERVALS = [];
const KEYS = STATION1.storedKeys;
const DATETIME = STATION1.datetime;
const LL1 = DATETIME.ll1;
const LL2 = DATETIME.ll2;
const LL3 = DATETIME.ll3;
const LL4 = DATETIME.ll4;
const LL5 = DATETIME.ll5;
const LL6 = DATETIME.ll6;
const LL7 = DATETIME.ll7;
const LL8 = DATETIME.ll8;
const LL9 = DATETIME.ll9;
const LL10 = DATETIME.ll10;
const LL11 = DATETIME.ll11;
const LL12 = DATETIME.ll12;
const LL13 = DATETIME.ll13;
const LL14 = DATETIME.ll14;
const LL15 = DATETIME.ll15;

let storeReadLLn = [];
let LLN = 0;


module.exports = (NODE, mainWindow) => {

    // Private functions
    const _stopIntervals = () => {
        INTERVALS.forEach(clearInterval); // Clear interval
    }

    // ---- Add to read list ----- //
    const _addAutoManual = () => {
        NODE.conn.addItems(DATETIME.header.autoManual);
        NODE.conn.addItems(DATETIME.header.autoManual2);
        NODE.conn.addItems(DATETIME.header.autoManual3);
        NODE.conn.addItems(DATETIME.header.autoManual4);
        NODE.conn.addItems(DATETIME.header.autoManual5);
    }

    const _addllnBits = () => {
        NODE.conn.addItems(STATION1.bits.ll1isOn);
        NODE.conn.addItems(STATION1.bits.ll2isOn);
        NODE.conn.addItems(STATION1.bits.ll3isOn);
        NODE.conn.addItems(STATION1.bits.ll4isOn);
        NODE.conn.addItems(STATION1.bits.ll5isOn);
        NODE.conn.addItems(STATION1.bits.ll6isOn);
        NODE.conn.addItems(STATION1.bits.ll7isOn);
        NODE.conn.addItems(STATION1.bits.ll8isOn);
        NODE.conn.addItems(STATION1.bits.ll9isOn);
        NODE.conn.addItems(STATION1.bits.ll10isOn);
        NODE.conn.addItems(STATION1.bits.ll11isOn);
        NODE.conn.addItems(STATION1.bits.ll12isOn);
        NODE.conn.addItems(STATION1.bits.ll13isOn);
        NODE.conn.addItems(STATION1.bits.ll14isOn);
        NODE.conn.addItems(STATION1.bits.ll15isOn);
    };

    const _addLLnTime = (lln) => {
        if (NODE) {
            if (NODE.conn) {
                for (let i = 1; i <= 4; i++) {
                    let key = lln[`step${i}`];
                    NODE.conn.addItems(key.onHH);
                    // storeReadLLn.push(key.onHH);
                    NODE.conn.addItems(key.onMM);
                    // storeReadLLn.push(key.onMM);
                    NODE.conn.addItems(key.onSS);
                    // storeReadLLn.push(key.onSS);
                    NODE.conn.addItems(key.offHH);
                    // storeReadLLn.push(key.offHH);
                    NODE.conn.addItems(key.offMM);
                    // storeReadLLn.push(key.offMM);
                    NODE.conn.addItems(key.offSS);
                    // storeReadLLn.push(key.offSS);
                }
            }

           
        }   
        

        readHelper(NODE)
            .then(data => {
                console.log(data, Object.keys(data).length);
            });

    };

    const _removeLLnTime = (lln) => {

        if (NODE) {
            if (NODE.conn) {
                // Loop through 4 steps
                for (let i = 1; i <= 4; i++) {
                    let key = lln[`step${i}`];
                    NODE.conn.removeItems(key.onHH);
                    NODE.conn.removeItems(key.onMM);
                    NODE.conn.removeItems(key.onSS);
                    NODE.conn.removeItems(key.offHH);
                    NODE.conn.removeItems(key.offMM);
                    NODE.conn.removeItems(key.offSS);
                }
            }
        }
        

        readHelper(NODE)
            .then(data => {
                console.log(data);
            });

    };

    const _removeLl1 = () => {
        ipcMain.on(CHANNELS.removeLl1, (e, _) => {
            console.log('remove ll1');
            _stopIntervals();
            _removeLLnTime(LL1);
            _startLoop(0);
        });
    };
    const _removeLl2 = () => {
        ipcMain.on(CHANNELS.removeLl2, (e, _) => {
            console.log('remove ll2');
            _stopIntervals();
            _removeLLnTime(LL2);
            _startLoop(0);
        });
    };
    const _removeLl3 = () => {
        ipcMain.on(CHANNELS.removeLl3, (e, _) => {
            console.log('remove ll3');
            _stopIntervals();
            _removeLLnTime(LL3);
            _startLoop(0);
        });
    };
    const _removeLl4 = () => {
        ipcMain.on(CHANNELS.removeLl4, (e, _) => {
            console.log('remove ll4');
            _stopIntervals();
            _removeLLnTime(LL4);
            _startLoop(0);
        });
    };
    const _removeLl5= () => {
        ipcMain.on(CHANNELS.removeLl5, (e, _) => {
            console.log('remove ll5');
            _stopIntervals();
            _removeLLnTime(LL5);
            _startLoop(0);
        });
    };
    const _removeLl6 = () => {
        ipcMain.on(CHANNELS.removeLl6, (e, _) => {
            console.log('remove ll6');
            _stopIntervals();
            _removeLLnTime(LL6);
            _startLoop(0);
        });
    };
    const _removeLl7 = () => {
        ipcMain.on(CHANNELS.removeLl7, (e, _) => {
            console.log('remove ll7');
            _stopIntervals();
            _removeLLnTime(LL7);
            _startLoop(0);
        });
    };
    const _removeLl8 = () => {
        ipcMain.on(CHANNELS.removeLl8, (e, _) => {
            console.log('remove ll8');
            _stopIntervals();
            _removeLLnTime(LL8);
            _startLoop(0);
        });
    };
    const _removeLl9 = () => {
        ipcMain.on(CHANNELS.removeLl9, (e, _) => {
            console.log('remove ll9');
            _stopIntervals();
            _removeLLnTime(LL9);
            _startLoop(0);
        });
    };
    const _removeLl10 = () => {
        ipcMain.on(CHANNELS.removeLl10, (e, _) => {
            console.log('remove ll10');
            _stopIntervals();
            _removeLLnTime(LL10);
            _startLoop(0);
        });
    };
    const _removeLl11 = () => {
        ipcMain.on(CHANNELS.removeLl11, (e, _) => {
            console.log('remove ll11');
            _stopIntervals();
            _removeLLnTime(LL11);
            _startLoop(0);
        });
    };
    const _removeLl12 = () => {
        ipcMain.on(CHANNELS.removeLl12, (e, _) => {
            console.log('remove ll12');
            _stopIntervals();
            _removeLLnTime(LL12);
            _startLoop(0);
        });
    };
    const _removeLl13 = () => {
        ipcMain.on(CHANNELS.removeLl13, (e, _) => {
            console.log('remove ll13');
            _stopIntervals();
            _removeLLnTime(LL13);
            _startLoop(0);
        });
    };
    const _removeLl14 = () => {
        ipcMain.on(CHANNELS.removeLl14, (e, _) => {
            console.log('remove ll14');
            _stopIntervals();
            _removeLLnTime(LL14);
            _startLoop(0);
        });
    };
    const _removeLl15 = () => {
        ipcMain.on(CHANNELS.removeLl15, (e, _) => {
            console.log('remove ll15');
            _stopIntervals();
            _removeLLnTime(LL15);
            _startLoop(0);
        });
    };



    const _addDatetime = () => { // Will be used on every page
        const datetime = STATION1.datetime;
        const datetimeHeader = datetime.header;

        NODE.conn.addItems(datetimeHeader.date);
        NODE.conn.addItems(datetimeHeader.month);
        NODE.conn.addItems(datetimeHeader.year);
        NODE.conn.addItems(datetimeHeader.minute);
        NODE.conn.addItems(datetimeHeader.hour);
        NODE.conn.addItems(datetimeHeader.second);
    }

    // ----- Parse data ------- //
    // let cachedDatetime = null;
    // store.set(KEYS.headerDatetime, 'Reading...');

    // Make 2 digit helper function
    const _make2Digits = (data) => {
        if (data < 10) {
            return '0' + data;
        } else {
            return data;
        }
    };

    const _parseDatetime = (data) => {
        let outputDatetime = 'Reading...';

        if (data !== 'Reading...') {
            const header = DATETIME.header;
            const date = _make2Digits(data[header.date]);
            const month = data[header.month];
            const year = _make2Digits(data[header.year]);
            const hour = _make2Digits(data[header.hour]);
            const minute = _make2Digits(data[header.minute]);
            const second = _make2Digits(data[header.second]);
            
            outputDatetime = `${date} ${monthNames[month - 1]} ${year} ${hour}:${minute}:${second}`;
        }

        mainWindow.webContents.send(CHANNELS.datetime, outputDatetime); // Send to channel                        
        store.set(KEYS.headerDatetime, outputDatetime); // Save datetime

    };


    // Auto manual
    let cachedAutoManual;
    const _parseAutoManual = (data) => {
        const autoManual = data[DATETIME.header.autoManual];

        if (cachedAutoManual !== autoManual) {
            cachedAutoManual = autoManual;
            store.set(CHANNELS.autoManual, autoManual);
            mainWindow.webContents.send(CHANNELS.autoManual, autoManual);
        }
    };

    let cachedAutoManual2;
    const _parseAutoManual2 = (data) => {
        const autoManual2 = data[DATETIME.header.autoManual2];

        if (cachedAutoManual2 !== autoManual2) {
            cachedAutoManual2 = autoManual2;
            store.set(CHANNELS.autoManual2, autoManual2);
            mainWindow.webContents.send(CHANNELS.autoManual2, autoManual2);
        }
    };

    let cachedAutoManual3;
    const _parseAutoManual3 = (data) => {
        const autoManual3 = data[DATETIME.header.autoManual3];

        if (cachedAutoManual3 !== autoManual3) {
            cachedAutoManual3 = autoManual3;
            store.set(CHANNELS.autoManual3, autoManual3);
            mainWindow.webContents.send(CHANNELS.autoManual3, autoManual3);
        }
    };

    let cachedAutoManual4;
    const _parseAutoManual4 = (data) => {
        const autoManual4 = data[DATETIME.header.autoManual4];

        if (cachedAutoManual4 !== autoManual4) {
            cachedAutoManual4 = autoManual4;
            store.set(CHANNELS.autoManual4, autoManual4);
            mainWindow.webContents.send(CHANNELS.autoManual4, autoManual4);
        }
    };

    let cachedAutoManual5;
    const _parseAutoManual5 = (data) => {
        const autoManual5 = data[DATETIME.header.autoManual5];

        if (cachedAutoManual5 !== autoManual5) {
            cachedAutoManual5 = autoManual5;
            store.set(CHANNELS.autoManual5, autoManual5);
            mainWindow.webContents.send(CHANNELS.autoManual5, autoManual5);
        }
    };

    let ll1On;
    let ll2On;
    let ll3On;
    let ll4On;
    let ll5On;
    let ll6On;
    let ll7On;
    let ll8On;
    let ll9On;
    let ll10On;
    let ll11On;
    let ll12On;
    let ll13On;
    let ll14On;
    let ll15On;
    const _parseLLn = (data) => {
        const ll1OnResult = data[STATION1.bits.ll1isOn];
        const ll2OnResult = data[STATION1.bits.ll2isOn];
        const ll3OnResult = data[STATION1.bits.ll3isOn];
        const ll4OnResult = data[STATION1.bits.ll4isOn];
        const ll5OnResult = data[STATION1.bits.ll5isOn];
        const ll6OnResult = data[STATION1.bits.ll6isOn];
        const ll7OnResult = data[STATION1.bits.ll7isOn];
        const ll8OnResult = data[STATION1.bits.ll8isOn];
        const ll9OnResult = data[STATION1.bits.ll9isOn];
        const ll10OnResult = data[STATION1.bits.ll10isOn];
        const ll11OnResult = data[STATION1.bits.ll11isOn];
        const ll12OnResult = data[STATION1.bits.ll12isOn];
        const ll13OnResult = data[STATION1.bits.ll13isOn];
        const ll14OnResult = data[STATION1.bits.ll14isOn];
        const ll15OnResult = data[STATION1.bits.ll15isOn];
        // console.log(ll1OnResult, ll2OnResult, ll3OnResult);

        if (ll1On !== ll1OnResult) {
            ll1On = ll1OnResult;
            store.set(CHANNELS.ll1On, ll1OnResult);
            mainWindow.webContents.send(CHANNELS.ll1On, ll1On);
        }
        if (ll2On !== ll2OnResult) {
            ll2On = ll2OnResult;
            store.set(CHANNELS.ll2On, ll2OnResult);
            mainWindow.webContents.send(CHANNELS.ll2On, ll2On);
        }
        if (ll3On !== ll3OnResult) {
            ll3On = ll3OnResult;
            store.set(CHANNELS.ll3On, ll3OnResult);
            mainWindow.webContents.send(CHANNELS.ll3On, ll3On);
        }

        if (ll4On !== ll4OnResult) {
            ll4On = ll4OnResult;
            store.set(CHANNELS.ll4On, ll4OnResult);
            mainWindow.webContents.send(CHANNELS.ll4On, ll4On);
        }
        if (ll5On !== ll5OnResult) {
            ll5On = ll5OnResult;
            store.set(CHANNELS.ll5On, ll5OnResult);
            mainWindow.webContents.send(CHANNELS.ll5On, ll5On);
        }
        if (ll6On !== ll6OnResult) {
            ll6On = ll6OnResult;
            store.set(CHANNELS.ll6On, ll6OnResult);
            mainWindow.webContents.send(CHANNELS.ll6On, ll6On);
        }

        if (ll7On !== ll7OnResult) {
            ll7On = ll7OnResult;
            store.set(CHANNELS.ll7On, ll7OnResult);
            mainWindow.webContents.send(CHANNELS.ll7On, ll7On);
        }
        if (ll8On !== ll8OnResult) {
            ll8On = ll8OnResult;
            store.set(CHANNELS.ll8On, ll8OnResult);
            mainWindow.webContents.send(CHANNELS.ll8On, ll8On);
        }
        if (ll9On !== ll9OnResult) {
            ll9On = ll9OnResult;
            store.set(CHANNELS.ll9On, ll9OnResult);
            mainWindow.webContents.send(CHANNELS.ll9On, ll9On);
        }

        if (ll10On !== ll10OnResult) {
            ll10On = ll10OnResult;
            store.set(CHANNELS.ll10On, ll10OnResult);
            mainWindow.webContents.send(CHANNELS.ll10On, ll10On);
        }
        if (ll11On !== ll11OnResult) {
            ll11On = ll11OnResult;
            store.set(CHANNELS.ll11On, ll11OnResult);
            mainWindow.webContents.send(CHANNELS.ll11On, ll11On);
        }
        if (ll12On !== ll12OnResult) {
            ll12On = ll12OnResult;
            store.set(CHANNELS.ll12On, ll12OnResult);
            mainWindow.webContents.send(CHANNELS.ll12On, ll12On);
        }

        if (ll13On !== ll13OnResult) {
            ll13On = ll13OnResult;
            store.set(CHANNELS.ll13On, ll13OnResult);
            mainWindow.webContents.send(CHANNELS.ll13On, ll13On);
        }
        if (ll14On !== ll14OnResult) {
            ll14On = ll14OnResult;
            store.set(CHANNELS.ll14On, ll14OnResult);
            mainWindow.webContents.send(CHANNELS.ll14On, ll14On);
        }
        if (ll15On !== ll15OnResult) {
            ll15On = ll15OnResult;
            store.set(CHANNELS.ll15On, ll15OnResult);
            mainWindow.webContents.send(CHANNELS.ll15On, ll15On);
        }
    }

    // ---- Loop Watch ---- //
    // Will read and keep watching for data change
    const _startLoop = (n) => {
        const loopInterval = setInterval(() => {
            readHelper(NODE)
                .then(data => {
                    _parseDatetime(data);
                    // console.log(data);
                    _parseAutoManual(data);
                    _parseAutoManual2(data);
                    _parseAutoManual3(data);
                    _parseAutoManual4(data);
                    _parseAutoManual5(data);

                    _parseLLn(data);
                    if (n === 1) {
                        // console.log('reading step1', data);
                        require('./readingll1step1')(mainWindow, data);
                        require('./readingll1step2')(mainWindow, data);
                        require('./readingll1step3')(mainWindow, data);
                        require('./readingll1step4')(mainWindow, data);
                    }

                    if (n === 2) {
                        require('./readingll2/readingllnstep1')(mainWindow, data);
                        require('./readingll2/readingllnstep2')(mainWindow, data);
                        require('./readingll2/readingllnstep3')(mainWindow, data);
                        require('./readingll2/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 3) {
                        require('./readingll3/readingllnstep1')(mainWindow, data);
                        require('./readingll3/readingllnstep2')(mainWindow, data);
                        require('./readingll3/readingllnstep3')(mainWindow, data);
                        require('./readingll3/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 4) {
                        require('./readingll4/readingllnstep1')(mainWindow, data);
                        require('./readingll4/readingllnstep2')(mainWindow, data);
                        require('./readingll4/readingllnstep3')(mainWindow, data);
                        require('./readingll4/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 5) {
                        require('./readingll5/readingllnstep1')(mainWindow, data);
                        require('./readingll5/readingllnstep2')(mainWindow, data);
                        require('./readingll5/readingllnstep3')(mainWindow, data);
                        require('./readingll5/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 6) {
                        require('./readingll6/readingllnstep1')(mainWindow, data);
                        require('./readingll6/readingllnstep2')(mainWindow, data);
                        require('./readingll6/readingllnstep3')(mainWindow, data);
                        require('./readingll6/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 7) {
                        require('./readingll7/readingllnstep1')(mainWindow, data);
                        require('./readingll7/readingllnstep2')(mainWindow, data);
                        require('./readingll7/readingllnstep3')(mainWindow, data);
                        require('./readingll7/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 8) {
                        require('./readingll8/readingllnstep1')(mainWindow, data);
                        require('./readingll8/readingllnstep2')(mainWindow, data);
                        require('./readingll8/readingllnstep3')(mainWindow, data);
                        require('./readingll8/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 9) {
                        require('./readingll9/readingllnstep1')(mainWindow, data);
                        require('./readingll9/readingllnstep2')(mainWindow, data);
                        require('./readingll9/readingllnstep3')(mainWindow, data);
                        require('./readingll9/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 10) {
                        require('./readingll10/readingllnstep1')(mainWindow, data);
                        require('./readingll10/readingllnstep2')(mainWindow, data);
                        require('./readingll10/readingllnstep3')(mainWindow, data);
                        require('./readingll10/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 11) {
                        require('./readingll11/readingllnstep1')(mainWindow, data);
                        require('./readingll11/readingllnstep2')(mainWindow, data);
                        require('./readingll11/readingllnstep3')(mainWindow, data);
                        require('./readingll11/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 12) {
                        require('./readingll12/readingllnstep1')(mainWindow, data);
                        require('./readingll12/readingllnstep2')(mainWindow, data);
                        require('./readingll12/readingllnstep3')(mainWindow, data);
                        require('./readingll12/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 13) {
                        require('./readingll13/readingllnstep1')(mainWindow, data);
                        require('./readingll13/readingllnstep2')(mainWindow, data);
                        require('./readingll13/readingllnstep3')(mainWindow, data);
                        require('./readingll13/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 14) {
                        require('./readingll14/readingllnstep1')(mainWindow, data);
                        require('./readingll14/readingllnstep2')(mainWindow, data);
                        require('./readingll14/readingllnstep3')(mainWindow, data);
                        require('./readingll14/readingllnstep4')(mainWindow, data);
                    }

                    if (n === 15) {
                        require('./readingll15/readingllnstep1')(mainWindow, data);
                        require('./readingll15/readingllnstep2')(mainWindow, data);
                        require('./readingll15/readingllnstep3')(mainWindow, data);
                        require('./readingll15/readingllnstep4')(mainWindow, data);
                    }
                })
                .catch(err => {
                    console.log(err, 'reading error', NODE);
                    const errMessage = 'Reading...';
                    _parseDatetime(errMessage);
                    // require('../reInit')(mainWindow, NODE.id, false);
                });

        }, SCANTIME);
        INTERVALS.push(loopInterval);
    };

    // ---- Main Program ---- //
    const main = () => {

        _stopIntervals();
        _addDatetime();
        _addAutoManual();
        _addllnBits();
        _startLoop(0);

        console.log('starting reading main');
        //  ----  Catch page ---  //
        ipcMain.on(CHANNELS.onLLn, (e, lln) => {
            console.log(lln);
            if (lln === 1) {
                console.log('ll1');
                _stopIntervals();
                _addLLnTime(LL1);
                _startLoop(1);
                _removeLl1(); // Listen for ll1 page change
            }

            if (lln === 2) {
                console.log('ll2');
                _stopIntervals();
                _addLLnTime(LL2);
                _startLoop(2);
                _removeLl2(); // Listen for ll1 page change
            }

            if (lln === 3) {
                console.log('ll3');
                _stopIntervals();
                _addLLnTime(LL3);
                _startLoop(3);
                _removeLl3(); // Listen for ll1 page change
            }

            if (lln === 4) {
                console.log('ll4');
                _stopIntervals();
                _addLLnTime(LL4);
                _startLoop(4);
                _removeLl4();
            }

            if (lln === 5) {
                console.log('ll5');
                _stopIntervals();
                _addLLnTime(LL5);
                _startLoop(5);
                _removeLl5();
            }

            if (lln === 6) {
                console.log('ll6');
                _stopIntervals();
                _addLLnTime(LL6);
                _startLoop(6);
                _removeLl6();
            }

            if (lln === 7) {
                console.log('ll7');
                _stopIntervals();
                _addLLnTime(LL7);
                _startLoop(7);
                _removeLl7();
            }

            if (lln === 8) {
                console.log('ll8');
                _stopIntervals();
                _addLLnTime(LL8);
                _startLoop(8);
                _removeLl8();
            }

            if (lln === 9) {
                console.log('ll9');
                _stopIntervals();
                _addLLnTime(LL9);
                _startLoop(9);
                _removeLl9();
            }

            if (lln === 10) {
                console.log('ll10');
                _stopIntervals();
                _addLLnTime(LL10);
                _startLoop(10);
                _removeLl10();
            }

            if (lln === 11) {
                console.log('ll11');
                _stopIntervals();
                _addLLnTime(LL11);
                _startLoop(11);
                _removeLl11();
            }

            if (lln === 12) {
                console.log('ll12');
                _stopIntervals();
                _addLLnTime(LL12);
                _startLoop(12);
                _removeLl12();
            }

            if (lln === 13) {
                console.log('ll13');
                _stopIntervals();
                _addLLnTime(LL13);
                _startLoop(13);
                _removeLl13();
            }

            if (lln === 14) {
                console.log('ll14');
                _stopIntervals();
                _addLLnTime(LL14);
                _startLoop(14);
                _removeLl14();
            }

            if (lln === 15) {
                console.log('ll15');
                _stopIntervals();
                _addLLnTime(LL15);
                _startLoop(15);
                _removeLl15();
            }
        });
    };

    main();
};