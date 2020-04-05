import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// https://stackoverflow.com/a/54490329
import "core-js/stable";
import "regenerator-runtime/runtime";

import './styles/app.scss';
import store from './store';
import Navbar from './components/Navbar.jsx';

import './observers';

const App = () => (
  <Navbar />
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);