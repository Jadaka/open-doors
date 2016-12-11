// @flow
import React, { Component } from 'react';
import './App.scss';
import LoginContainer from './LoginContainer';

class Splash extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Sign in to Open Doors
        </p>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-4 col-sm-4">
            <LoginContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
