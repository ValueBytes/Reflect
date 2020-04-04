import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h3 className="navbar__title">
          reflect
        </h3>

        <div className="navbar__profile">
          <img
            className="navbar__profile-image" 
            src="https://via.placeholder.com/50"
          />
          <p>Anonymous</p>
        </div>
      </div>
    );
  }
}

export default Navbar;