import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { APP_NAME } from './constants';

const titleDOM = document.getElementsByTagName('title')[0];
titleDOM.innerText = APP_NAME;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
