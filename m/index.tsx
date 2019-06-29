import * as _ from 'lodash';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import app from '@samoyed/app';
import { Provider } from 'react-redux';
import store from './redux';
import App from './views/App';
import '../scss/index.scss';

app.init();

app.defaults.iconFontFamily = 'iconfont';
app.defaults.iconNamePrefix = 'icon-';

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  window.sapp = app;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);

// 修复微信下拉刷新bug
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, { passive: false });
