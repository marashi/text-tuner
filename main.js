import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true, // Makes the window translucent
    frame: false, // Removes the window frame for a more customized look

    vibrancy: "hud",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setOpacity(0.9);
  win.loadFile(path.join(__dirname, "dist/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
