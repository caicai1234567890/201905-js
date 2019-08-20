import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'

// 在 index.js 使用 react-redux ，使用 Provider 组件把 store 引入组件树
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));


