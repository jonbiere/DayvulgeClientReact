import { Provider } from 'react-redux';
import React from 'react'
import store from './store.jsx';
import ReactDOM from 'react-dom'
import '../public/index.scss'
import Routes from './routes'

import './socket'


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

