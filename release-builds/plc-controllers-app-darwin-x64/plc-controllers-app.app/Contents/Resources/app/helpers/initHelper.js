module.exports = (NODE) => {
    return new Promise((resolve, reject) => {
        NODE.conn.initiateConnection({ port: 102, host: NODE.ip, rack: 0, slot: 1 }, (err) => {
            if (typeof (err) !== "undefined") {
                console.log('not connected', err);
                NODE.isOnline = false;
            } else {
                console.log('connected');
                NODE.isOnline = true;
            }
            resolve(NODE.isOnline);
        });
    }); 
};



