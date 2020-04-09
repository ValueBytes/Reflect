import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// https://stackoverflow.com/a/54490329
import "core-js/stable";
import "regenerator-runtime/runtime";

import './styles/app.scss';
import store from './store';
import Navbar from './components/Navbar.jsx';

import './observers';

import dashboard from './pages/Dashboard.jsx';
import board from './pages/Board.jsx';

const App = () => (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path='/' component={dashboard} />
      <Route exact path='/:id' component={board} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);