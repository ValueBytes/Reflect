import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth__container">
          <h3 className="auth__title">Login</h3>

          <button className="button button--primary">
            Log in with GitHub
          </button>
          <button className="button button--primary">
            Log in Anonymously
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;