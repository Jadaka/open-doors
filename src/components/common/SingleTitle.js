import React from 'react';
import { Link } from 'react-router';

import './SingleTitle.scss';

const SingleTitle = ({id, name, url, address}) => {
  return (
    <div className="company-title row">
      <div className="company-graphic col-xs-1 col-xs-offset-1">{name[0].toUpperCase()}</div>
      <div className="company-meta col-xs-7">
        <h3 className="company-name">
          <Link to={`/company/${name}/`}>{name}</Link>
        </h3>
        <h4 className="company-details">{url} | <span className="company-location">{address}</span></h4>
      </div>
      <div className="review-link-container col-xs-2">
        <Link to={`/company/${id}/review`}>Add a Review</Link>
      </div>
    </div>
  )
};

export default SingleTitle;
