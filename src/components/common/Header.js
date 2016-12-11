import React, { Component } from 'react';
import Logo from '../common/Logo';
import Back from '../common/Back';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-with-back-button">
        <div className="row middle-xs">
          <div className="col-xs-1 center-xs">
            <Back />
          </div>
          <div className="center-xs col-xs-10">
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
