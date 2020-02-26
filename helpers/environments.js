
const machine = {
    start: 'M00',
    stop: 'M10',
    speedUp: 'M100',
    speedDown: 'M101',
    forward: 'M200',
    reverse: 'M201',
    unwindSpeed: 'D01',
    unwindTorque: 'D00',
    rewindSpeed: 'D03',
    rewindTorque: 'D02',
    increaseRightSpeed: 'M200',
    decreaseRightSpeed: 'M100',
    increaseLeftSpeed: 'M201',
    decreaseLeftSpeed: 'M101',
    commChannels: {
        speed: 'speed',
        torque: 'torque',
        speedUp: 'speedUp',
        speedUpVal: 'speedUpVal',
        speedDown: 'speedDown',
        reverse: 'reverse',
        forward: 'forward',
        stop: 'stop',
        increaseRightSpeed: 'increaseRightSpeed',
        decreaseRightSpeed: 'decreaseRightSpeed',
        increaseLeftSpeed: 'increaseLeftSpeed',
        decreaseLeftSpeed: 'decreaseLeftSpeed'
    }
};

module.exports.intervalTime = 1000;
module.exports.machine = machine;
