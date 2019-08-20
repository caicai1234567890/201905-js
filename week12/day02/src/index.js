import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from './store/react-redux'
import store from './store/myStore'

ReactDOM.render(<Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));

