module.exports = (NODE) => {
    return new Promise((resolve, reject) => {
        if (NODE.conn) {
            NODE.conn.readAllItems((err, data) => {
                NODE.doneReading = true;
                if (err) {
                    reject('Error reading ', err);
                } else {
                    resolve(data);
                }
            });
        }
    });
};