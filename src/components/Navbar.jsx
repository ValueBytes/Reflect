import React, { Component } from 'react';
import Auth from './Auth.jsx';
import { connect } from 'react-redux';

import firebase from '../config/firebase';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.error(err);
    }
  }

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
          <p onClick={this.signOut}>{user.displayName}</p>
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