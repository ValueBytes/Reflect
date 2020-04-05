import React, { Component } from 'react';
import Auth from './Auth.jsx';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    const { user, signedIn } = this.props;
    
    return (
      <div className="navbar">
        <h3 className="navbar__title">
          reflect
        </h3>

        <div className="navbar__profile">
          <Auth show={signedIn} />
          <img
            className="navbar__profile-image" 
            src="https://via.placeholder.com/50"
          />
          <p>{user.displayName}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    signedIn: state.auth.signedIn
  };
}

export default connect(mapStateToProps)(Navbar);