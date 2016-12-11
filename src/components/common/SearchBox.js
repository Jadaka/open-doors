import React, { Component } from 'react';
import InputForm from '../common/InputForm';
import './SearchBox.scss';
import SearchIcon from '../../assets/search_icon.svg';
import LocationIcon from '../../assets/location_icon.svg';

class SearchBox extends Component {
  constructor() {
    super()
    this.state = {
      numOfValidInputFields: 0,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnClick() {
    if(this.state.numOfValidInputFields) {
      console.log('Search for a company!');
    } else {
      console.error('Fields left blank...');
    }
  }

  handleInputChange(defaultInput: string, currentInput: string, hasNotChangedBefore: boolean) {
    if(currentInput !== defaultInput && hasNotChangedBefore) {
      this.setState({ numOfValidInputFields: ++this.state.numOfValidInputFields });
    } else if (currentInput === defaultInput) {
      this.setState({ numOfValidInputFields: --this.state.numOfValidInputFields });
    }
  }

  render() {
    return (
      <div className='search-box-container'>
        <div className='row center-xs'>
          <div className='col-xs-12'>
            <InputForm placeholder="Search" containerClass="search-left">
              <img src={SearchIcon} alt="search" className="search-input-logo" />
            </InputForm>
            <InputForm placeholder="Where?" containerClass="search-right">
              <img src={LocationIcon} alt="search" className="search-input-logo" />
            </InputForm>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
