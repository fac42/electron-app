// Start the Electron Framework
const electron = require('electron');

// Access the app and BrowserWindow modules
const { app, BrowserWindow } = electron;

// Create the browser window
app.whenReady().then(
    function() {
        mainWindow = new BrowserWindow({
            width: 1000,
            height: 800,
            resizable: true,
            webPreferences: {
                devTools: true,
                nodeIntegration: true
            }
        });
        // Remove the Menubar
        mainWindow.setMenu(null);
        // Load HTML file into mainWindow
        mainWindow.loadFile('./index.html');
    }
)

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
      }
})
// MacOS window functionality
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
