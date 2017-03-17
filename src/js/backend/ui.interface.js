import path from 'path';
import { remote } from 'electron';
// import { remote } from global.require('electron');
import event from './event';
import { APP_NAME, EVENT } from '../constants';

// const Menu = remote.Menu;
// const Tray = remote.Tray;
// const readerWindow = remote.getGlobal('readerWindow');

const focusWindow = (browserWindow) => {
  if(!browserWindow.isVisible()) {
    browserWindow.show();
  }

  if(!browserWindow.isMinimized()) {
    browserWindow.restore();
  }

  browserWindow.focus();
}

event.on(EVENT.OPEN_READER_WINDOW, () => {
  console.log('OPEN_READER_WINDOW');
  if(readerWindow) {
    focusWindow(readerWindow);
  }
})

export default {};
