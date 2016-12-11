// @flow
import React, { Component } from 'react';
import InputForm from '../common/InputForm';
import Button from '../common/Button';

export default class LoginContainer extends Component {
  constructor() {
    super();
    (this:any).handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('Logging in!');
  }

  render() {
    return (
      <div className="login-form">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-12">
                <InputForm placeholder='Username' />
              </div>
              <div className="col-xs-12">
                <InputForm placeholder='Password' />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Button customClass='lg-btn login-btn' text='Sign in' handleOnClick={this.handleOnClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
