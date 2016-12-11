import React, { Component } from 'react';
import './review.scss';
import Header from '../common/Header';
import InputForm from '../common/InputForm';
import Slider from './Slider';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(message) {
    this.setState({ message });
  }

  // renderSliders() {
  //   const sliders = ['Interactions', 'Harassment', 'Advancement', 'Family Support', 'Work Life Balance', 'Equal Pay'];
  //   return sliders.
  // }

  render() {
    return (
      <div className="review-page">
        <div className="row">
          <div className="col-xs-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
            <div className="row">
              <div className="col-xs-12">
                <h3>{`Write a Review for "{this.props.company}"`}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <InputForm saveData={this.handleOnChange} placeholder='Write a little review' />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="rate-company-container">
                  Leave a 1-5 Review
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="sliders-container">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
