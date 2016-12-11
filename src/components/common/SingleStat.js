import React from 'react';

import './SingleStat.scss';

const renderDivier = () => (
  <span className="vertical-divider"></span>
);

const SingleStat = ({ number, label, divider }) => (
  <div className="single-stat col-xs-6">
    <h4 className="single-stat-number">{number}</h4>
    <p className="single-stat-label">{label}</p>
    {divider ? renderDivier(divider) : ""}
  </div>
);

export default SingleStat;
