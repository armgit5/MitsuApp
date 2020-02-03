module.exports = (conn) => {
    return new Promise((resolve, reject) => {
        if (conn) {
            conn.readAllItems((err, data) => {
                if (err) {
                    reject('Error reading ', err);
                } else {
                    resolve(data);
                }
            });
        }
    });
};