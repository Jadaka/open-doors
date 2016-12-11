import React, { Component } from 'react';
import Button from '../common/Button';
import SearchBox from '../common/SearchBox';
import Logo from '../common/Logo';
import './SearchCompany.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveCompanyName, saveCompanyLocation, postCompanySearch } from '../../actions/search';

class SearchCompany extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.saveCompanyName = this.saveCompanyName.bind(this);
    this.saveCompanyLocation = this.saveCompanyLocation.bind(this);
  }

  handleOnClick() {
    console.log('searching!');
    const { companyName, companyLocation } = this.props;
    this.props.postCompanySearch({ companyName, companyLocation });
  }

  saveCompanyName(name) {
    console.log('name', name)
    this.props.saveCompanyName(name);
  }

  saveCompanyLocation(location) {
    console.log('location', location)
    this.props.saveCompanyLocation(location);
  }

  render() {
    return (
      <div className="search-page">
        <div className="row">
          <div className="col-xs-12">
            <Logo />
          </div>
        </div>
        <div className="row" style={{'marginTop': '40px'}}>
          <div className="col-md-8 col-md-offset-2 search-title">
            <h2>Discover a company that treats you fairly</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="search-container">
              <div className="row">
                <div className="col-xs-12">
                  <SearchBox saveCompanyName={this.saveCompanyName} saveCompanyLocation={this.saveCompanyLocation}/>
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

const mapStateToProps = state => ({
  companyName    : state.search.name,
  companyLocation: state.search.location,
  results        : state.search.searchResults,
});

const mapDispatchToProps = dispatch =>
   bindActionCreators({ saveCompanyName, saveCompanyLocation, postCompanySearch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchCompany);
