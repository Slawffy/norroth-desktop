
const { app, BrowserWindow, shell, session } = require('electron');

const GAME_URL = 'https://www.norroth.com/';

function createWindow() {
    const gameSession = session.fromPartition('persist:norroth');

    const win = new BrowserWindow({
        title: 'Norroth Desktop',
        width: 1440,
        height: 900,
        minWidth: 800,
        minHeight: 600,

        // Use the native Linux title bar
        frame: true,
        resizable: true,
        maximizable: true,
        minimizable: true,
        autoHideMenuBar: true,

        backgroundColor: '#111111',

        webPreferences: {
            session: gameSession,
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    win.loadURL(GAME_URL);

    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https://') ||
            url.startsWith('http://')) {
            shell.openExternal(url);
            }

            return { action: 'deny' };
    });

    win.webContents.on('before-input-event', (event, input) => {
        if (input.key === 'F11' && input.type === 'keyDown') {
            win.setFullScreen(!win.isFullScreen());
        }
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
