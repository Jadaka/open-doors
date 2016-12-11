import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import './login.scss';
import Logo from '../common/Logo';
import { connect } from 'react-redux';
import { saveUsername, savePassword, postLogin } from '../../actions/login';
import ErrorMessage from '../common/ErrorMessage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
  }

  handleOnClick() {
    // check if login store has all values
      // if so then redirect
      // else send an error to page
    const { username, password, isLoginSuccess } = this.props;
    if (isLoginSuccess === null || !isLoginSuccess) {
      this.props.postLogin({ username, password });
      if (!isLoginSuccess) {
        //if login is not successful after first attempt
        this.setState({ showError: true });
      }
    } else {
      this.setState({ showError: true });
    }
  }

  saveUsername(username) {
    // call dispatch to save username to store
    this.props.saveUsername(username);
  }

  savePassword(password) {
    // call dispatch to save username to store
    // this.props.dispatch( {type: 'SAVE_PASSWORD', payload });
    this.props.savePassword(password);
  }

  renderErrorMessage() {
    if(this.state.showError) {
      return (
        <ErrorMessage message='Incorrect Username/Password.' />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <Logo />
            </div>
          </div>
        </div>
        <div className="login-form">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="login-title">Login</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveUsername} placeholder='Enter a username' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.savePassword} type='password' placeholder='Password' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 button-container">
              { this.renderErrorMessage() }
              <Button customClass='lg-btn' text='Sign In' handleOnClick={this.handleOnClick} onClick={this.handleOnClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username      : state.login.username,
  password      : state.login.password,
  isLoginSuccess: state.login.isLoginSuccess,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ saveUsername, savePassword, postLogin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
