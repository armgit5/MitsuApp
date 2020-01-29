const { ipcMain } = require('electron');
const Node = require('./node');
const { CHANNELS, SCANTIME } = require('./environments');
const STATION1 = require('../data/station1');
const STATION2 = require('../data/station2');
const STATION3 = require('../data/station3');
const STATION4 = require('../data/station4');
const STATION5 = require('../data/station5');
const STATION6 = require('../data/station6');
const STATION7 = require('../data/station7');
const STATION8 = require('../data/station8');
const STATION9 = require('../data/station9');
const STATION10 = require('../data/station10');
const STATION11 = require('../data/station11');
const STATION12 = require('../data/station12');
const STATIONS = [
    STATION1, STATION2, STATION3, STATION4, STATION5,
    STATION6, STATION7, STATION8, STATION9, STATION10,
    STATION11, STATION12
];

const initHelper = require('./initHelper');

const { GROUP1, GROUP2, GROUP3, GROUP4, GROUP5 } = require('./environments');
var sys = require('sys')
var exec = require('child_process').exec;

let NODE; // Hold node connection
let NODES = [];
let STATION_ID = 0;
const KEYS = STATION1.storedKeys;
let aNodeIsOnline = false;
let initReadWrite = false;
const Store = require('electron-store');
const store = new Store();

let startLoop = [true];
const PINGINTERVALS = [];

module.exports = (mainWindow) => {

    const _sendDefaultDatetime = () => {
        const outputDatetime = 'Reading...';
        mainWindow.webContents.send(CHANNELS.datetime, outputDatetime); // Send to channel                        
        store.set(KEYS.headerDatetime, outputDatetime); // Save datetime
    };

    const _initReadWrite = (n) => {
        if (aNodeIsOnline) {
            require('./station1-process/readingHandler')(n, mainWindow);
            require('./station1-process/clickHandler')(n, mainWindow);
        }
    }

    const _connect = () => {
        // Init station 1
        if (STATION_ID === 1) {
            // NODE = null;
            NODE = new Node(STATION1.id, STATION1.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S1 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 1 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 2) {
            // NODE = null;
            NODE = new Node(STATION2.id, STATION2.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S2 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 2 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    // require('./reInit')(mainWindow, STATION2.id, false);
                    // _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 3) {
            // NODE = null;
            NODE = new Node(STATION3.id, STATION3.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S3 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 3 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 4) {
            NODE = new Node(STATION4.id, STATION4.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S4 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 4 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 5) {
            NODE = new Node(STATION5.id, STATION5.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S5 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 5 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 6) {
            NODE = new Node(STATION6.id, STATION6.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S6 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 6 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 7) {
            NODE = new Node(STATION7.id, STATION7.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S7 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 7 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 8) {
            NODE = new Node(STATION8.id, STATION8.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S8 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 8 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 9) {
            NODE = new Node(STATION9.id, STATION9.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S9 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 9 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 10) {
            NODE = new Node(STATION10.id, STATION10.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S10 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 10 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 11) {
            NODE = new Node(STATION11.id, STATION11.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S11 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 11 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }

        if (STATION_ID === 12) {
            NODE = new Node(STATION12.id, STATION12.ip);
            initHelper(NODE).then(isOnline => {
                console.log('S12 is online ', isOnline);
                if (isOnline) {
                    aNodeIsOnline = true;
                    console.log('init station 12 sucessfully');
                    _initReadWrite(NODE);
                } else {
                    _sendDefaultDatetime();
                }
            });
        }
    };

    const _initNode = () => {
        if (NODE) {
            console.log('kill the existing node');
            NODE.conn.dropConnection((cb) => {
                console.log('drop connection', cb);
                NODE.conn = null; // Clear node to kill old connection
                NODE = null;
                aNodeIsOnline = false;
                _connect();
            });
        } else {
            _connect();
        };
    };


    let alreadyAssignToNode = false;
    const _connectV2 = (id) => {

        const tempId = 'N' + id;

        NODES.forEach(n => {
            console.log('node id ', n.id);
            if (tempId === n.id) {
                NODE = n;
                if (NODE !== undefined) {
                    require('./station1-process/readingHandler')(NODE, mainWindow);
                    require('./station1-process/clickHandler')(NODE, mainWindow);
                    alreadyAssignToNode = true;
                }
                console.log('selected node ', n.id);
                console.log('selected node 2 ', NODE.id);
            }
        });

    }

    const _initNodeV2 = (id) => {
        console.log('init node v2');
        
        _connectV2(id);

        let runCnt = 0;
        let timerId;
        const timerMethod = () => {
            if (alreadyAssignToNode) clearInterval(timerId);
            runCnt++;
            _connectV2(id);
            if (runCnt > 3) clearInterval(timerId);
        }
        if (!alreadyAssignToNode) {
            clearInterval(timerId);
            timerId = setInterval(timerMethod, 1000);
        }


    };

    // Ping Test
    const _pingIp = (ip) => {
        return new Promise((resolve, reject) => {
            exec(`ping -c 1 ${ip}`, (error, stdout, stderr) => {
                if (stdout) {
                    resolve(true);
                } else {
                    resolve(false);
                }

                if (stderr) {
                    reject(stderr);
                }
            });
        });
    };
    const PINGINTERVALS = [];
    const _stopPingIntervals = () => {
        PINGINTERVALS.forEach(clearInterval); // Clear interval
    }

    let IDS = [];
    let alreadyInitAllNodes = false;
    let stationCnt = 0;
    const _initAllNodes = () => {
        stationCnt = 0;
        let cnt = 1;
        console.log('Init Total nodes ', NODES.length);

        if (NODES.length === 0) {

            STATIONS.forEach(s => {
                const tempNode = new Node(s.id, s.ip);
                console.log('node inited ', s.id, s.ip);
                initHelper(tempNode).then(isOnline => {
                    if (isOnline) {
                        // require('./isOnCheck')(NODES, mainWindow, true);
                        console.log('new node', s.id, cnt);
                        if (!IDS.includes(s.id)) {
                            IDS.push(s.id);
                            NODES.push(tempNode);
                        }
                        cnt++;
                    } else {
                        console.log(s.id, 'is offline');
                    }
                });

                stationCnt++;
                if (stationCnt === STATIONS.length) {
                    alreadyInitAllNodes = true;
                }



            });
            if (NODE && !IDS.includes(NODE.id)) {
                IDS.push(NODE.id);
                NODES.push(NODE);
                require('./station1-process/clickHandler')(NODE, mainWindow);
            }
        }
    }

    // const _startPingLoop = () => {
    //     const _pingLoopInterval = setInterval(() => {

    //         // Check group 1
    //         let group1ok = true;
    //         let group1Len = GROUP1.length;
    //         let group1Count = 1;

    //         GROUP1.forEach(ip => {

    //             _pingIp(ip).then(ok => {
    //                 if (!ok) {
    //                     group1ok = false;
    //                 }
    //                 if (group1Count === group1Len) {
    //                     console.log('group 1 ok ', group1ok);
    //                     if (group1ok) {
    //                         mainWindow.webContents.send(CHANNELS.onGroup1, true);
    //                     } else {
    //                         mainWindow.webContents.send(CHANNELS.onGroup1, false);
    //                     }
    //                 }
    //                 group1Count++;
    //             });
    //         });

    //         // Check group 2
    //         let group2ok = false;
    //         let group2Len = GROUP2.length;
    //         let group2Count = 1;
    //     }, 1000);
    //     PINGINTERVALS.push(_pingLoopInterval);
    // };


    // const _initArrayNodes = (arr) => {
    //     let cnt = 1;
    //     console.log('Init Total nodes ', NODES.length);

    //     if (NODES.length === 0) {

    //         arr.forEach(i => {
    //             const tempNode = new Node(STATIONS[i - 1].id, STATIONS[i - 1].ip);
    //             console.log('node inited ', STATIONS[i - 1].id, STATIONS[i - 1].ip);
    //             initHelper(tempNode).then(isOnline => {
    //                 if (isOnline) {
    //                     NODES.push(tempNode);
    //                     // require('./isOnCheck')(NODES, mainWindow, true);
    //                     console.log('new node', STATIONS[i - 1].id, cnt);
    //                     cnt++;
    //                 }
    //             });
    //         });
    //         NODES.push(NODE);
    //     }
    // }

    // const _killAllNodes = () => {

    //     console.log('Kill Total nodes ', NODES.length);

    //     if (NODES.length > 0) {

    //         const nodeCounts = NODES.length;
    //         let cnt = 1;
    //         NODES.forEach(n => {
    //             if (n && n.conn) {
    //                 n.conn.dropConnection((cb) => {
    //                     console.log('disconnnect node', cb, cnt, n.id);
    //                     if (cnt === nodeCounts) {
    //                         console.log('set nodes to 0');
    //                         NODES = [];
    //                     }
    //                     cnt++;
    //                 });
    //             }
    //         });
    //     }
    // }

    // Main Program
    const main = () => {
        // Get station id when page changes
        ipcMain.on(CHANNELS.onNewStation, (e, id) => {
            // If new id comes in then kills old connection and start 
            // new connection to new plc
            console.log('connect 1 node', id);
            startLoop[0] = true;
            if (id !== STATION_ID) {
                STATION_ID = id;
                _initNode();
                // _initNodeV2(id);
            }
        });


        let reqCnt = 0;
        // On Status check all stations
        ipcMain.on(CHANNELS.onStationsCheck, (e, id, arr) => {

            console.log('on status check working');

            // _killAllNodes();
            PINGINTERVALS.forEach(clearInterval);
            startLoop[0] = true;

            // if (arr) {
            //     _initSomeNodes(arr);
            // } else {

            //     if (true) {
            //         _initAllNodes();
            //         alreadyInitAllNodes = true;
            //     }
            // }

            if (!alreadyInitAllNodes) {
                _initAllNodes();
            } else {
                console.log('not reinit all');
            }

            console.log('station count ', stationCnt, alreadyInitAllNodes, NODES.length);

            require('./isOnCheck')(NODES, mainWindow, startLoop, PINGINTERVALS);
        });

        // On Status check all stations
        ipcMain.on(CHANNELS.onStationsQuit, (e, id) => {
            // console.log('on status quite working');
            // _killAllNodes();
            // PINGINTERVALS.forEach(clearInterval);
            // startLoop[0] = false;
        });



    }

    main();
};