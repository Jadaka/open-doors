import React from 'react';
import logo from '../../assets/logo.svg';
import { browserHistory } from 'react-router';
import './Logo.scss';

const Logo = ({ size }) => (
  <a href="/">
    <img src={logo} className={size} alt="logo" />
  </a>
);

export default Logo;
