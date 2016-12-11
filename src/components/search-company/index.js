import React, { Component } from 'react';
import Button from '../common/Button';
import SearchBox from '../common/SearchBox';
import Logo from '../common/Logo';
import './SearchCompany.scss';

class SearchCompany extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('searching!');
  }

  render() {
    return (
      <div className="search-page">
        <div className="row">
          <div className="col-xs-12">
            <Logo />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 search-title">
            <h2>Search job sites, newspapers, associations, and company career pages.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="search-container">
              <div className="row">
                <div className="col-xs-12">
                  <SearchBox />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 button-container">
                  <Button customClass='lg-btn' text='Search' handleOnClick={this.handleOnClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCompany;
