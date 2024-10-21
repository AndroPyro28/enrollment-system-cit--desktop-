import { app, BrowserWindow } from "electron";
import registerListeners from "./helpers/ipc/listeners-register";
import path from "path";

const inDevelopment = process.env.NODE_ENV === "development";

if (require("electron-squirrel-startup")) {
    app.quit();
}

function createWindow() {
    const preload = path.join(__dirname, "preload.js");
    const mainWindow = new BrowserWindow({
        width: 1800,
        height: 1000,
        // closable: true,
        // focusable: false, //THIS IS THE KEY
        // maximizable: true,
        resizable: false,
        webPreferences: {
            devTools: inDevelopment,
            contextIsolation: true,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: false,

            preload: preload,
        },
        titleBarStyle: "hidden",
    });
    registerListeners(mainWindow);
    // @ts-ignore
    // @ts-nocheck
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        // @ts-ignore
        // @ts-nocheck
        mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        mainWindow.loadFile(
            // @ts-ignore
            // @ts-nocheck
            path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
        );
    }

    mainWindow.webContents.on('before-input-event', (event, input) => {
        // Disable F12 and Ctrl+Shift+I for DevTools in production mode
            if (input.key === 'F12' || (input.control && input.shift && input.key.toLowerCase() === 'i') && !inDevelopment) {
                event.preventDefault();
            }
        });
    
      // Open DevTools only in development
    //   if (inDevelopment) {
    //     mainWindow.webContents.openDevTools();
    //   }
}

app.whenReady().then(createWindow);

//osX only
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//osX only ends