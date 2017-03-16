const electron = require('electron');
const path = require('path');
const fs = require('fs');
const { app } = electron;
const { Menu } = electron;
const { BrowserWindow } = electron;

const menuTemplate = [
  {
    label: 'Otaku',
    submenu: [
      {
        label: 'Exit',
        accelerator: 'Cmd+Q',
        click: function() {
          global.terminate();
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'Cmd+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+Cmd+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'Cmd+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'Cmd+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'Cmd+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'Cmd+A',
        selector: 'selectAll:'
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(menuTemplate);

global.terminate = function () {
  shouldQuit = true;
  app.quit();
};

let mainWindow;
let readerWindow;
let shouldQuit = false;

function createWindow() {
  // 创建窗口并加载页面
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    // frame: false,
    transparent: true,
    icon: path.join(__dirname, './assets/images/icon/128.png'),
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 打开窗口的调试工具
  mainWindow.webContents.openDevTools();

  // 检测目录结构
  fs.stat("data", function(err, stats) {
    if(err){
      fs.mkdir("data", (err)=>{
        if(err){
          console.warn(err);
        }
      })
    }
  });

  // 窗口关闭的监听
  mainWindow.on('close', (e) => {
      if (!shouldQuit) {
          e.preventDefault();
          mainWindow.hide();
      }
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  //基于darwin平台的菜单模板
  if (process.platform == "darwin") {
    Menu.setApplicationMenu(menu);
  }

  readerWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    transparent: true,
    icon: path.join(__dirname, './assets/images/icon/128.png'),
  });
  readerWindow.loadURL(`file://${__dirname}/reader.html`);
  readerWindow.hide();
  readerWindow.on('close', (e) => {
      if (!shouldQuit) {
          e.preventDefault();
          readerWindow.hide();
      }
  });
  readerWindow.on('closed', () => {
    readerWindow = null;
  });

  global.readerWindow = readerWindow;
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
