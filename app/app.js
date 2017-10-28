import { Provider } from 'react-redux';
import React from 'react'
import store from './store';
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Routes from './routes'
import axios from 'axios'

//import './socket'

//apply global settings
const applyAppSettings = () => {
  let token = localStorage.getItem('auth_token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}


const renderApp = () => ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

applyAppSettings();
renderApp();
