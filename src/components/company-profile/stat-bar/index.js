import React, { Component } from 'react';

import './StatBar.scss';

class StatBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const el = document.getElementById(`bar-for-${this.props.label}`);
    el.style.width = ((this.props.rating / 500) * 100) + "%";
  }

  render () {
    const { rating, label } = this.props;

    // if we want a label:
    // <div className="progress-label">{`${(rating/500)*100}%`}</div>

    return (
      <div className="single-stat-bar">
        <div className="progress">
          <div className="bar" id={`bar-for-${label}`}>
          </div>
        </div>
        <h2 className="single-stat-bar-label">{label}</h2>
      </div>
    );
  }
}

export default StatBar;
