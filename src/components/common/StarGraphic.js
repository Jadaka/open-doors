import React from 'react';
import FullStar from '../../assets/star-full.svg';
import HalfStar from '../../assets/star-half.svg';
import './StarGraphic.scss';

const StarGraphic = ({ stars }) => {
  const starCount = Number(stars);
  const starArr = [];
  for (var i = 1; i < Number(stars); i++) {
    starArr.push("full");
  }
  if (starCount - Math.floor(starCount) > 0.2) {
    starArr.push("half");
  }
  return (
    <div>
      {starArr.map((starState, idx) => {
        if (starState === "full") {
          starState = FullStar;
        } else if (starState === "half") {
          starState = HalfStar;
        }
        return <img className="star-graphic" src={starState} key={idx} role="presentation" />;
      })}
    </div>
  );
}

export default StarGraphic;
