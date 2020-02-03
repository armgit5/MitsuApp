const { ipcMain } = require('electron');
const readHelper = require('./readHelper');
const { intervalTime } = require('./environments');
let loop;

module.exports = (conn, channel) => {

    if (conn) {

        if (loop !== undefined) {
            clearInterval(loop);
        }
        
        readHelper(conn).then(data => {
            loop = setInterval(() => {
                console.log('reading channel ', channel, data[channel]);
            }, intervalTime);
        });

    }
    
};