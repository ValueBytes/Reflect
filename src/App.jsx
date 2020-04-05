import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/app.scss';
import store from './store';
import Navbar from './components/Navbar.jsx';

const App = () => (
  <Navbar />
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);