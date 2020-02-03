
const machine = {
    startRegister: 'M00',
    stopRegister: 'M10',
    speed1Register: 'D01',
    torque1Register: 'D00',
    speed2Register: 'D03',
    torque2Register: 'D02',
};

const commChannels = {
    start: 'start',
    stop: 'stop',
    speed1: 'speed1',
    torque1: 'torque1',
    speed1: 'speed1',
    torque1: 'torque1',
}

module.exports.machine = machine;
module.exports.commChannels = commChannels;
