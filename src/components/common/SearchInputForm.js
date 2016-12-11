import React, { Component } from 'react';

class SearchInputForm extends Component {

  static defaultProps: { defaultInput: '', customClass : 'search-input-container', };

  constructor(props: Props) {
    super(props);
    this.state = {
      currentInput: props.defaultInput,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    const inputValue = this.refs.searchInput.value;
    const hasNotChangedBefore = this.state.currentInput === this.props.defaultInput;
    this.props.handleInputChange(this.props.defaultInput, inputValue, hasNotChangedBefore);
    this.setState({ currentInput: inputValue });
  }

  render() {
    return (
      <div className={this.props.customClass}>
        <div className='search-input-label'>
          {this.props.label}
        </div>
        <input className='input-form' ref='searchInput' type='text' onChange={this.handleOnChange} placeholder={this.props.defaultInput} />
      </div>
    );
  }
}

export default SearchInputForm;
