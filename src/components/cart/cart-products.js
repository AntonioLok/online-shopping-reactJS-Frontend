import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCart } from '../../store/actions/cart';
import Button from '../common/form/button';
import getTotalSingleProductCost from '../../utils/cart-products/get-total-single-product-cost';
import SelectedOption from '../common/selected-input';
import { SELECT_AMOUNT_OPTIONS } from '../../constants';
import getUpdatedCartProducts from '../../utils/cart-products/get-updated-cart-products';

class CartProducts extends Component {
  handleCartUpdate(quantity) {
    const {
      cartProducts, product, dispatchUpdateCart, isAuthenticated, updateUnauthenticatedUserCart,
    } = this.props;
    const updatedCartProducts = getUpdatedCartProducts(
      cartProducts, product, product.size, quantity,
    );
    if (isAuthenticated) {
      dispatchUpdateCart(updatedCartProducts);
    } else {
      localStorage.setItem('OS_UNAUTHENTICATED_USER_CART', JSON.stringify((updatedCartProducts)));
      updateUnauthenticatedUserCart(updatedCartProducts);
    }
  }

  deleteProduct() {
    this.handleCartUpdate(0);
  }

  handleChange(e) {
    this.handleCartUpdate(e.target.value);
  }

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
          <div className="total-cost-label">{total}</div>
          <div className="description-label">Size: {size}</div>
          <div className="description-label">Price: {price}</div>
          <div className="description-label">
            <span>Quantity:  </span>
            <select onChange={e => this.handleChange(e)}>
              {SELECT_AMOUNT_OPTIONS.map(productQuantity => (
                <SelectedOption
                  option={productQuantity}
                  selectedOption={quantity}
                />
              ))}
            </select>
          </div>
        </div>
        <Button icon="close" onClick={() => this.deleteProduct()} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdateCart: (products) => {
    dispatch(updateCart(products));
  },
});

CartProducts.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizeAvailable: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizeAvailable: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  dispatchUpdateCart: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  updateUnauthenticatedUserCart: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps,
)(CartProducts);
