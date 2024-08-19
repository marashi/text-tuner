import { app, BrowserWindow, ipcMain } from "electron";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const openai = new OpenAI();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    minWidth: 550,
    maxWidth: 1000,
    height: 600,
    minHeight: 600,
    maxHeight: 800,
    maximizable: false,
    transparent: true, // Makes the window translucent
    frame: false, // Removes the window frame for a more customized look

    vibrancy: "hud",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setOpacity(0.95);
  win.loadFile(path.join(__dirname, "dist/index.html"));
};

ipcMain.handle("call-openai-api", async (event, prompt) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an English language expert." },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return "ERROR!";
  }
});

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
