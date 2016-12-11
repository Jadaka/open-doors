import React, { Component } from 'react';
import './review.scss';
import Header from '../common/Header';
import InputForm from '../common/InputForm';
import Button from '../common/Button';
import Slider from './Slider';
// import EmptyStars from '../../assets/star-empty';
// import EmptyStars from '../../assets/star-empty.svg';
import RatingStars from '../common/RatingStars';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(message) {
    this.setState({ message });
  }

  handleOnClick() {
    console.log('Post review!');
  }

  renderSliders() {
    const sliders = ['Interactions', 'Harassment', 'Advancement', 'Family Support', 'Work Life Balance', 'Equal Pay'];
    return sliders.map((item, i) => {
      return (
        <div className="slider-container">
          <div className="row" key={i}>
            <div className="col-xs-4">
              <span className="slider-label">{item}</span>
            </div>
            <div className="col-xs-8">
              <div className="slider-rating-labels">
                <span className="not-satisfied" style={{"float": 'left'}}>Not Satisfied</span>
                <span className="not-satisfied" style={{"float": 'right'}}>Highly Satisfied</span>
              </div>
              <Slider />
            </div>
          </div>
        </div>
      );
    });
  }

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
            <div className="review-body">
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <span className="review-title">{`Write a Review for "Informz"`}</span>
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
                    <RatingStars />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <div className="sliders-container">
                    { this.renderSliders() }
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 button-container">
                  <Button customClass='lg-btn' text='Post Your Review' handleOnClick={this.handleOnClick} />
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
