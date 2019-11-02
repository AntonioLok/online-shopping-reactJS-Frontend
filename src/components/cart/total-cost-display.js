import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalCostDisplay extends Component {
  render() {
    const { item } = this.props;
    const { label, price } = item;
    return (
      <div className="total-cost-display">
        <div>{label}</div>
        <div>{price}</div>
      </div>
    );
  }
}

TotalCostDisplay.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default TotalCostDisplay;
