
const machine = {
    start: 'M00',
    stop: 'M10',
    unwindSpeed: 'D01',
    unwindTorque: 'D00',
    rewindSpeed: 'D03',
    rewindTorque: 'D02',
    notRealRegisters: {
        speed: 'speed',
        torque: 'torque',
        speedUp: 'speedUp',
        speedDown: 'speedDown'
    }
};

module.exports.intervalTime = 1000;
module.exports.machine = machine;
