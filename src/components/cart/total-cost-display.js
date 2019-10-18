import React from 'react';

const renderTotalCostDisplay = (item) => {
  const { label, price } = item;
  return (
    <div className="total-cost-display">
      <div>{label}</div>
      <div>{price}</div>
    </div>
  );
};

export default renderTotalCostDisplay;
