import React, { Component } from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';

import './SearchHeader.scss';

class SearchHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="search-header row">
        <div className="col-md-4 search-header-left">
          <Logo size="medium" />
        </div>
        <div className="col-md-8 search-header-right">
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default SearchHeader;
