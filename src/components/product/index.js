import React, { Component } from 'react';
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddToCartForm from './add-to-cart-form';
import fetchProduct from '../../store/actions/product';
import { updateCart } from '../../store/actions/cart';
import { FIELDS_TYPE, SELECT_AMOUNT_OPTIONS } from '../../constants';
import getUpdatedCartProducts from '../../utils/cart-products/get-updated-cart-products';
import getUnauthenticatedCartProducts from '../../utils/cart-products/get-unauthenticated-cart-products';

class Product extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatchFetchProduct, match } = this.props;
    const { id } = match.params;
    dispatchFetchProduct(id);
  }

  handleSubmit(fields) {
    const {
      productState,
      dispatchUpdateCart,
      cartProducts,
      isAuthenticated,
      updateUnauthenticatedUserCart,
    } = this.props;
    const product = productState.data;

    if (isAuthenticated) {
      dispatchUpdateCart(
        getUpdatedCartProducts(cartProducts, product, fields.selectSize, fields.selectAmount),
      );
    } else {
      const unauthenticatedUpdatedCartProducts = getUpdatedCartProducts(
        getUnauthenticatedCartProducts(), product, fields.selectSize, fields.selectAmount,
      );
      localStorage.setItem('OS_UNAUTHENTICATED_USER_CART', JSON.stringify((unauthenticatedUpdatedCartProducts)));
      updateUnauthenticatedUserCart(unauthenticatedUpdatedCartProducts);
    }
  }

  render() {
    const { SELECT_INPUT } = FIELDS_TYPE;
    const { productState } = this.props;
    const product = productState.data;
    const { sizeAvailable } = product;
    const {
      img,
      name,
      price,
    } = product;
    const addToCartFormProps = {
      onSubmit: this.handleSubmit,
      submitButtonProps: {
        icon: 'shopping_basket',
        caption: 'Add product',
      },
      inputFields: [
        {
          type: SELECT_INPUT,
          name: 'selectSize',
          options: sizeAvailable,
          validate: ['required'],
          placeholder: 'Please select a size',
        },
        {
          type: SELECT_INPUT,
          name: 'selectAmount',
          options: SELECT_AMOUNT_OPTIONS,
          validate: ['required'],
          placeholder: 'Please select an amount',
        },
      ],
    };

    let elem = null;

    if (Object.keys(product).length !== 0) {
      elem = (
        <Grid>
          <Row>
            <Col xs={10} xsOffset={1} sm={5} md={4}>
              <img alt={name} src={img} />
            </Col>
            <Col xs={10} xsOffset={1} sm={5} md={6} smOffset={1} mdOffset={1}>
              <div className="label-field">{name}</div>
              <div className="label-field">${price}</div>
              <AddToCartForm {...addToCartFormProps} />
            </Col>
          </Row>
        </Grid>
      );
    }

    return (
      <div className="os--product">
        {elem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productState: state.product,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchProduct: (id) => {
    dispatch(fetchProduct(id));
  },
  dispatchUpdateCart: (products) => {
    dispatch(updateCart(products));
  },
});

Product.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dispatchFetchProduct: PropTypes.func.isRequired,
  productState: PropTypes.shape({
    data: PropTypes.shape({
      _id: PropTypes.string,
      quantity: PropTypes.number,
      size: PropTypes.string,
      img: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      sizeAvailable: PropTypes.arrayOf(PropTypes.string),
    }),
    statusCode: PropTypes.number,
    statusText: PropTypes.string,
  }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    quantity: PropTypes.number,
    size: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizeAvailable: PropTypes.arrayOf(PropTypes.string),
  })),
  isAuthenticated: PropTypes.bool.isRequired,
  updateUnauthenticatedUserCart: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
