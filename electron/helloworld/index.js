const { app, BrowserWindow } = require('electron');

let mainWindow = null;

//准备好
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      //不开启网页无法使用require
      nodeIntegration: true,
      //不开启无法使用remote
      enableRemoteModule: true,
    },
  });

  require('./main/menu.js');

  //加载主页面
  mainWindow.loadFile('index.html');

  mainWindow.webContents.openDevTools();

  //窗口关闭给清空
  mainWindow.on('close', () => {
    mainWindow = null;
  });
});
