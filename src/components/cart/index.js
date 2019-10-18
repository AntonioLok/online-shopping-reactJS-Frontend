import React, { Component, Fragment } from 'react';
import {
  Grid, Row, Col, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ORDER_TOTAL_ITEMS_LABELS, DELIVERY_PRICE } from '../../constants';
import getTotalSingleProductCost from '../../utils/cart-products/get-total-single-product-cost';
import renderTotalCostDisplay from './total-cost-display';
import renderProductsCart from './products-cart';

class Cart extends Component {
  getTotalCost() {
    const { cartProducts } = this.props;
    let totalCost = 0;
    cartProducts.forEach((cartProduct) => {
      totalCost += getTotalSingleProductCost(cartProduct);
    });
    return Math.round(totalCost * 100) / 100;
  }

  render() {
    const { cartProducts } = this.props;
    const { ORDER_VALUE, DELIVERY, TOTAL } = ORDER_TOTAL_ITEMS_LABELS;
    const price = this.getTotalCost();
    const orderTotalItems = [
      { label: `${ORDER_VALUE}:`, price: `$${price}` },
      { label: `${DELIVERY}:`, price: `$${DELIVERY_PRICE}` },
      { label: `${TOTAL}:`, price: `$${Math.round((price + DELIVERY_PRICE) * 100) / 100}` },
    ];

    const nonEmptyCart = (
      <Fragment>
        <Col md={7}>
          <div className="shopping-bag-items">
            {cartProducts.map(product => renderProductsCart(product))}
          </div>
        </Col>
        <Col md={5}>
          <div className="shopping-bag-total">
            <div className="section">
              <div>SHOPPING BAG TOTAL</div>
            </div>
            <div className="section">
              {orderTotalItems.map(item => renderTotalCostDisplay(item))}
              <Button className="checkout" variant="dark">Check out</Button>
            </div>
          </div>
        </Col>
      </Fragment>
    );

    const emptyCart = (
      <Fragment>
        <Col md={12}>
          <b>YOUR SHOPPING BAG IS EMPTY.</b>
        </Col>
      </Fragment>
    );

    return (
      <div className="os--cart">
        <Grid>
          <Row>
            <Col md={12}>
              <div className="title">SHOPPING BAG</div>
            </Col>
            {cartProducts.length !== 0 ? nonEmptyCart : emptyCart}
          </Row>
        </Grid>
      </div>
    );
  }
}

Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  })),
};

export default Cart;
