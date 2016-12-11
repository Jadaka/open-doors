import React, { Component } from 'react';
import FullStar from '../../assets/star-full.svg';
import HalfStar from '../../assets/star-half.svg';
import EmptyStar from '../../assets/star-empty.svg';
import _ from 'lodash';
import './StarGraphic.scss';

class RatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: 0 };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(starId) {
    return () => {
      this.setState({ stars: starId })
    }
  }

  renderStars() {
    const starCount = this.state.stars;
    if(starCount === 0) {
      return _.range(0, 5).map((num, i) => {
        return (
          <img onClick={this.handleOnClick(num)} className="star-graphic" src={EmptyStar} key={i} role="presentation" />
        );
      });
    } else {
      const starArr = this.state.stars.map((stars) => {
        return "full";
      });
      if (starCount - Math.floor(starCount) > 0.2) {
        starArr.push("half");
      }
      return starArr.map((starState, idx) => {
        if (starState === "full") {
          starState = FullStar;
        } else if (starState === "half") {
          starState = HalfStar;
        }
        return <img onClick={this.handleOnClick(idx)} className="star-graphic" src={starState} key={idx} role="presentation" />;
      });
    }
  }

  render() {
    return (
      <div className="rating-stars">
        <span>Leave a 1-5 Review</span>
        { this.renderStars() }
      </div>
    );
  }
}

export default RatingStars;