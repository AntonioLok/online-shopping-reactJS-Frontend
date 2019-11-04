import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedOption extends Component {
  render() {
    const { option, selectedOption } = this.props;
    let optionElement;
    if (option === selectedOption) {
      optionElement = <option selected value={option} key={option}>{option}</option>;
    } else {
      optionElement = <option value={option} key={option}>{option}</option>;
    }
    return optionElement;
  }
}

SelectedOption.propTypes = {
  option: PropTypes.any.isRequired,
  selectedOption: PropTypes.any.isRequired,
};

export default SelectedOption;
