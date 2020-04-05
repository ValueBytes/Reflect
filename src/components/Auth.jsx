import React, { Component } from 'react';
import firebase from '../config/firebase';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  async ghLogin() {
    let provider = new firebase.auth.GithubAuthProvider();

    try {
      await firebase
              .auth()
              .signInWithPopup(provider);
    } catch (err) {
      console.error(err);
    }
  }

  async anonLogin() {
    try {
      await firebase.auth().signInAnonymously();
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { show } = this.props;

    return (
      <div className={show ? "auth auth--hide" : "auth"}>
        <div className="auth__container">
          <h3 className="auth__title">Login</h3>

          <button className="button button--primary" onClick={this.ghLogin}>
            Log in with GitHub
          </button>
          <button className="button button--primary" onClick={this.anonLogin}>
            Log in Anonymously
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;