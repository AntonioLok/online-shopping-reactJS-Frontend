import React from 'react';
import getTotalSingleProductCost from '../../utils/cart-products/get-total-single-product-cost';

const renderProductsCart = (product) => {
  const {
    name, price, img, quantity, size,
  } = product;
  const total = getTotalSingleProductCost(product);
  return (
    <div className="item">
      <img src={img} alt="product" />
      <div className="info">
        <div className="title-label">{name}</div>
        <div className="title-label">{price}</div>
        <div className="description-label">Size: {size}</div>
        <div className="description-label">Quantity: {quantity}</div>
        <div className="description-label">Total: {total}</div>
      </div>
    </div>
  );
};

export default renderProductsCart;
