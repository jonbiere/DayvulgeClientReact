import { Provider } from 'react-redux';
import React from 'react'
import store from './store';
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Routes from './routes'

//import './socket'


const renderApp = () => ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

renderApp();
