import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import classNames from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      defaultChoice: props.defaultValue,
      hasValue: false,
      value: null,
      selectedChoice: null
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.startWithDefaultChoice();
  }

  setDefaultChoice() {
    this.props.choices.forEach((choice) => {
      if(choice.value === this.props.defaultValue) {
        this.setState({ selectedChoice: choice.label, hasValue: true });
      }
      if(this.props.incrementNumOfValidAnswers) {
        this.props.incrementNumOfValidAnswers();
      }
    })
  }

  startWithDefaultChoice() {
    if(this.state.defaultChoice !== null) {
      this.setDefaultChoice();
    }
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen});
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  setDropdownClass() {
    return classNames("dropdown select-dropdown-container", this.props.customClass, {
      'open': this.state.isOpen
    });
  }

  setDropdownMenuClass() {
    if(this.props.alignRight) {
      return classNames("dropdown-menu", {
        'scrollable-menu': this.props.isScrollable,
        'dropdown-menu-right': this.props.alignRight
      });
    } else {
      return classNames("dropdown-menu", {
        'scrollable-menu': this.props.isScrollable
      });
    }
  }

  handleChange(value){
    if(this.props.onChange) {
      this.props.onChange(this.props.fieldName, value);
    }
    return;
  }

  handleInputChange(defaultValue, currValue) {
    if(this.props.handleInputChange) {
      const hasNotChangedBefore = this.state.value === null;
      this.props.handleInputChange(defaultValue, currValue, hasNotChangedBefore);
    }
    return;
  }

  selectChoice(value, label) {
    return () => {
      console.log('selecting Choice!');
      this.handleInputChange(this.state.defaultChoice, value);
      this.setState({ selectedChoice: label, value: value, hasValue: true });
      this.handleChange(value);
    };
  }

  renderSelectedChoice() {
    if(this.state.selectedChoice) {
      return (
        <div className="selected-choice">{ this.state.selectedChoice }</div>
      );
    }
  }

  renderOptions() {
    return this.props.choices.map((choice, index) => {
      return (
        <li key={index+choice.label} onMouseDown={this.selectChoice(choice.value, choice.label)} className="dropdown-item">{choice.label}</li>
      );
    });
  }

  render() {
    const setLabelClass = classNames("fl-input-label", {
      "float": this.state.hasValue
    });
    return (
      <div className={this.props.hide ? "hidden-xs-up select-dropdown-container": "select-dropdown-container"}>
        <div onClick={this.handleToggle} className={this.setDropdownClass()}>
          <div className="select-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <label className={setLabelClass}>{ this.props.label }</label>
            {this.renderSelectedChoice()}
            <span className="icon-down_arrow"></span>
          </div>
          <div className={this.setDropdownMenuClass()} role="menu">
            { this.renderOptions() }
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  isScrollable: false,
  defaultValue: null,
  hide: false
}

export default onClickOutside(Dropdown);
