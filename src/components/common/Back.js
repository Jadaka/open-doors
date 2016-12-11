import React, { Component } from 'react';
import back from '../../assets/back.svg';
import { browserHistory } from 'react-router';
import './Back.scss';

const Back = (props) => {
  return (
    <div className="back-btn" onClick={browserHistory.goBack}>
      <img src={back} alt="logo" />
      <span className="back-txt">Back</span>
    </div>
  );
}

export default Back;