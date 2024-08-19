const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("textTunerAPI", {
  askOpenAI: (prompt) => ipcRenderer.invoke("call-openai-api", prompt),
});
