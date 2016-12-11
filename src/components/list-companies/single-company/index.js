import React from 'react';

import SingleRating from '../../common/SingleRating';
import SingleTitle from '../../common/SingleTitle';

import './index.scss';

const SingleCompany = ({ id, name, url, address, ratings }) => (
  <div className="single-company col-md-12" id={`company-id-${id}`}>

    <SingleTitle id={id} name={name} url={url} address={address} />
    <SingleRating ratings={ratings} />

    <div className="featured-review row">
      <p className="featured-review-highlight col-xs-10 col-xs-offset-1">
        “Informz allows me to create new career paths while strengthening my current skill sets”
      </p>
      <p className="featured-review-normal col-xs-10 col-xs-offset-1">
        I began working at Informz as an HTML template designer. Within months they were having me professionally compose music for promotional videos...
        <a className="see-all-reviews">See All Reviews</a>
      </p>

    </div>

  </div>
);

export default SingleCompany;
