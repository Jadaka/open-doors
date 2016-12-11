import React, { Component } from 'react';
import Rcslider from 'rc-slider'
import './Slider.scss';

class Slider extends Component {

  handleOnAfterChange(val) {
    this.props.onAfterChange(val);
  }

  render() {
    return (
      <Rcslider
        min={0}
        max={100}
        onAfterChange={this.handleOnAfterChange}
        value={0}
        defaultValue={0}
      />
    );
  }
}

export default Slider;