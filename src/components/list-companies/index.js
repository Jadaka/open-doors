import React, { Component } from 'react';
import SearchHeader from '../common/SearchHeader';
import SingleCompany from './single-company';
import './list.scss';

class ListCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'Google',
    };
  }

  render() {
    const dummyRatings = {
      "overallRating"  : 329,
      "reviewCount"    : 3,
      "salaryCount"    : 1,
      "interactions"   : 300,
      "harassment"     : 433,
      "advancement"    : 400,
      "familySupport"  : 400,
      "workLifeBalance": 333,
      "equalPay"       : 433,
    };
    return (
      <div className="company-list-container">
        <SearchHeader />
        <div className="non-fixed-content">
          <div className="search-query">
            <h3>Results for "{this.state.searchQuery}"</h3>
          </div>
          <div className="company-list row">
            <SingleCompany
              id="1"
              name="Informz"
              url="www.informz.com"
              address="Saratoga Springs, NY"
              ratings={dummyRatings} />
            <SingleCompany
              id="1"
              name="Informz"
              url="www.informz.com"
              address="Saratoga Springs, NY"
              ratings={dummyRatings} />
            <SingleCompany
              id="1"
              name="Informz"
              url="www.informz.com"
              address="Saratoga Springs, NY"
              ratings={dummyRatings} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListCompanies;
