// Start the Electron Framework
const electron = require('electron');

// Access the app and BrowserWindow modules
const {app, BrowserWindow} = electron;

// Create the browser window
app.on('ready', function (){
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        resizable: true
    });

    // Remove the Menubar
    mainWindow.setMenu(null);
    // Load HTML file into mainWindow
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Activate Dev. Console
    // mainWindow.webContents.openDevTools({
    //     mode: 'bottom'
    // });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
      }
})
// MacOS window functionality
app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})
