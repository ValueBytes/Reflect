import React from "react";
import ReactDOM from "react-dom";

import "./styles/app.scss";

import Navbar from './components/Navbar.jsx';

const App = () => (
  <div>
    <Navbar />
    Blah
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));