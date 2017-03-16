import keymirror from 'keymirror';

export const APP_NAME = 'Otaku!';
export const APP_VERSION = '0.0.1';
export const APP_AUTHER = 'moonrailgun';
export const APP_HOMEPAGE = 'https://moonrailgun.com';
export const APP_RELEASES_URL = `https://api.github.com/repos/ppoffice/${ APP_NAME }/releases`;


export const EVENT = keymirror({
  HIDE_WINDOW: null,
  CLOSE_WINDOW: null,
  MINIMIZE_WINDOW: null,
  MAXIMIZE_WINDOW: null,
  OPEN_READER_WINDOW: null,

  WINDOW_MAXIMIZED: null,
  WINDOW_UNMAXIMIZED: null,
});
