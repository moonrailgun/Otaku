const electron = require('electron');
const path = require('path');
const { app } = electron;
const { BrowserWindow } = electron;

let win;
function createWindow() {
  // 创建窗口并加载页面
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    // frame: false,
    transparent: true,
    icon: path.join(__dirname, './assets/images/icon/128.png'),
  });
  win.loadURL(`file://${__dirname}/index.html`);

  // 打开窗口的调试工具
  win.webContents.openDevTools();

  // 窗口关闭的监听
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
