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

module.exports.CHANNELS = {
    onNewStation: 'on:new:station',
    onLLn: 'on:ll:n',
    datetime: 'datetime:data',
    onlineStatus: 'online:status',
    ll1On: 'll1:On',
    ll1Off: 'll1:Off',
    ll2On: 'll2:On',
    ll2Off: 'll2:Off',
    ll3On: 'll3:On',
    ll3Off: 'll3:Off',
    ll4On: 'll4:On',
    ll4Off: 'll4:Off',
    ll5On: 'll5:On',
    ll5Off: 'll5:Off',
    ll6On: 'll6:On',
    ll6Off: 'll6:Off',
    ll7On: 'll7:On',
    ll7Off: 'll7:Off',
    ll8On: 'll8:On',
    ll8Off: 'll8:Off',
    ll9On: 'll9:On',
    ll9Off: 'll9:Off',
    ll10On: 'll10:On',
    ll10Off: 'll10:Off',
    ll11On: 'll11:On',
    ll11Off: 'll11:Off',
    ll12On: 'll12:On',
    ll12Off: 'll12:Off',
    ll13On: 'll13:On',
    ll13Off: 'll13:Off',
    ll14On: 'll14:On',
    ll14Off: 'll14:Off',
    ll15On: 'll15:On',
    ll15Off: 'll15:Off',
    autoManual: 'auto:manual',
    setAutoManual: 'set:auto:manual',
    autoManual2: 'auto:manual2',
    setAutoManual2: 'set:auto:manual2',
    autoManual3: 'auto:manual3',
    setAutoManual3: 'set:auto:manual3',
    autoManual4: 'auto:manual4',
    setAutoManual4: 'set:auto:manual4',
    autoManual5: 'auto:manual5',
    setAutoManual5: 'set:auto:manual5',
    removeLl1: 'removeLl1',
    removeLl2: 'removeLl2',
    removeLl3: 'removeLl3',
    removeLl4: 'removeLl4',
    removeLl5: 'removeLl5',
    removeLl6: 'removeLl6',
    removeLl7: 'removeLl7',
    removeLl8: 'removeLl8',
    removeLl9: 'removeLl9',
    removeLl10: 'removeLl10',
    removeLl11: 'removeLl11',
    removeLl12: 'removeLl12',
    removeLl13: 'removeLl13',
    removeLl14: 'removeLl14',
    removeLl15: 'removeLl15',

    onStationsCheck: 'on:stations:check',
    onStationsQuit: 'on:stations:quit',
    onStation1: 'on:station:1',
    onStation2: 'on:station:2',
    onStation3: 'on:station:3',
    onStation4: 'on:station:4',
    onStation5: 'on:station:5',
    onStation6: 'on:station:6',
    onStation7: 'on:station:7',
    onStation8: 'on:station:8',
    onStation9: 'on:station:9',
    onStation10: 'on:station:10',
    onStation11: 'on:station:11',
    onStation12: 'on:station:12',

    onGroup1: 'on:group1',
    onGroup2: 'on:group2',
    onGroup3: 'on:group3',
    onGroup4: 'on:group4',
    onGroup5: 'on:group5'
}

module.exports.CHANNELS2 = {
    autoManual3: 'auto:manual3:2',
    setAutoManual3: 'set:auto:manual3:2',
}

module.exports.PRESSTIME = 2000;
module.exports.SCANTIME = 1000;

module.exports.GROUP1 = [
    'localhost', 'localhost2'
    // STATION1.ip, STATION2.ip, STATION3.ip, STATION4.ip
];
module.exports.GROUP2 = [
    STATION5.ip, STATION6.ip
];
module.exports.GROUP3 = [
    STATION7.ip, STATION8.ip
];
module.exports.GROUP4 = [
    STATION9.ip, STATION10.ip
];
module.exports.GROUP5 = [
    STATION11.ip, STATION12.ip
];

module.exports.COLORS = {
    green: 'lightgreen',
    red: 'lightcoral',
    gray: 'gray',
    greenOnOff: '#50FF00',
    yellow: '#FFFF00'
}

module.exports.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];