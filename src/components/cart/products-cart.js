import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getTotalSingleProductCost from '../../utils/cart-products/get-total-single-product-cost';

class ProductsCart extends Component {
  render() {
    const { product } = this.props;
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
  }
}

ProductsCart.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductsCart;
