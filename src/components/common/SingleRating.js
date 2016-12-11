import React from 'react';

import StarGraphic from './StarGraphic';
import SingleStat from './SingleStat';

import './SingleRating.scss';

const SingleRating = ({ ratings }) => {
  const {
    overallRating,
    reviewCount,
    salaryCount,
  } = ratings;
  return (
    <div className="company-rating row">
      <div className="overall-rating-container col-xs-3 col-xs-offset-1">
        <p className="overall-rating-text">{overallRating/100}</p>
        <StarGraphic stars={overallRating/100} />
      </div>
      <div className="rating-stats col-xs-3 row col-xs-offset-4">
        <SingleStat number={reviewCount} label="Reviews" divider={true} />
        <SingleStat number={salaryCount} label="Salaries" />
      </div>
    </div>
  );
};

export default SingleRating;
