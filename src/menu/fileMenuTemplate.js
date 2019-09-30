import { app, BrowserWindow } from "electron";

export const fileMenuTemplate = {
  label: "&File",
  submenu: [
    {
      label: "Open Channel Package...",
      accelerator: "CmdOrCtrl+O",
      click: () => {
        const dialog = require('../helpers/dialog');
        dialog.openChannelPackage();
      }
    },
    {
      label: "Open Source File...",
      accelerator: "CmdOrCtrl+Shift+O",
      click: () => {
        const dialog = require('../helpers/dialog');
        dialog.openBrightScriptFile();
      }
    },
    {
      label: "Save Screenshot...",
      accelerator: "CmdOrCtrl+S",
      click: () => {
        const dialog = require('../helpers/dialog');
        dialog.saveScreenshot();
      }
    },
    { type: 'separator' },    
    {
      label: "Reset Emulator",
      accelerator: "CmdOrCtrl+Shift+R",
      click: () => {
        BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
      }
    },
    { type: 'separator' },    
    {
      label: "Exit",
      role: "quit",
    }
  ]
};