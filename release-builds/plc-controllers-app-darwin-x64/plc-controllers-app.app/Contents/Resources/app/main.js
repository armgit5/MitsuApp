const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = electron;

const Store = require('electron-store');
const store = new Store();


// Starting main window
let mainWindow;
module.exports.mainWindow = mainWindow;
let alreadyLoaded = false;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 640,
        height: 500,
        resizable: false,
        show: false,
        icon: path.join(__dirname, '/assets/icons/win/bts.ico')
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/pages/mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);

    // Prevent memory leak when windows is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.webContents.on('did-finish-load', () => {
        // Starting Siemens Nodes7 process once 
        if (!alreadyLoaded) {
            store.clear();
            require('./helpers/nodes7')(mainWindow);
            alreadyLoaded = true;
        }
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    })
});


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    app.quit();
});

// Create menu template
const mainMenuTemplate = [
    {
        label: "                                                                                                                                                                                      V2.2"
    }
];

// Add dev tools item
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}