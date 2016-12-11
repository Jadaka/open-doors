import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUsername, savePassword, saveFirstName, saveLastName, saveEmail, registerUser } from '../../actions/register';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import Logo from '../common/Logo';
import ErrorMessage from '../common/ErrorMessage';
// import { browserHistory } from 'react-router';
import './register.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { showError: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.saveFirstName = this.saveFirstName.bind(this);
    this.saveLastName = this.saveLastName.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  handleOnClick() {
    const { isRegisterValid, registerUser, username, email, password } = this.props;
    console.log('valid --- ', isRegisterValid);
    if(isRegisterValid) {
      registerUser({ username, password, email });
    } else {
      // render error message
      this.setState({ showError: true });
    }
  }

  saveUsername(username) {
    // call dispatch to save username to store
    console.log('saving!');
    const { saveUsername } = this.props;
    saveUsername(username);
  }

  savePassword(password) {
    // call dispatch to save username to store
    console.log('saving!');
    const { savePassword } = this.props;
    savePassword(password);
  }

  saveFirstName(firstName) {
    // call dispatch to save username to store
    console.log('saving!');
    const { saveFirstName } = this.props;
    saveFirstName(firstName);
  }

  saveLastName(lastName) {
    // call dispatch to save username to store
    console.log('saving!');
    const { saveLastName } = this.props;
    saveLastName(lastName);
  }

  saveEmail(email) {
    // call dispatch to save username to store
    console.log('saving!');
    const { saveEmail } = this.props;
    saveEmail(email);
  }

  renderErrorMessage() {
    if(this.state.showError) {
      return (
        <ErrorMessage message='Please fill out all required fields.' />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="register-container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <Logo />
            </div>
          </div>
        </div>
        <div className="register-form">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="register-title">Quick Registration</h2>
              <h4 className="register-subtitle">It only takes a few seconds</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveUsername} placeholder='Choose a Cool Username' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.savePassword} type='password' placeholder='Password' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveFirstName} placeholder='First Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveLastName} placeholder='Last Name' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <InputForm saveData={this.saveEmail} placeholder='E-mail' />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 button-container">
              { this.renderErrorMessage() }
              <Button customClass='lg-btn' text='Sign Up' handleOnClick={this.handleOnClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ register: { numberOfValidAnswers, numberOfFields, username, password, email, firstName, lastName } }) => ({
  isRegisterValid: numberOfValidAnswers === numberOfFields,
  username,
  password,
  email,
  firstName,
  lastName,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ saveUsername, savePassword, saveEmail, saveFirstName, saveLastName, registerUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
