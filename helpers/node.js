const nodes7 = require('nodes7');  // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S

module.exports = class Node {
    constructor(id, ip) {
        this.id = id;
        this.ip = ip;
        this.doneReading = true;
        this.doneWriting = true;
        this.conn = new nodes7;
        this.isOnline = false;
    };
};