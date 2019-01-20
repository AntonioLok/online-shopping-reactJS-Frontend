import React from 'react';
import {
  Grid, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddToCartForm from './add-to-cart-form';
import { fetchProductAPI } from '../../store/actions/product';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // set to true by default for demo purposes
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchProduct, match } = this.props;
    const { id } = match.params;
    fetchProduct(id);
  }

  handleSubmit(fields) {
    const { product, history } = this.props;
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      const cartProduct = Object.assign(product, fields, { amount: 1 });
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      cart.push(cartProduct);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    // Will add logic here once the login and sign up component is completed.
    history.push('/cart');
  }

  render() {
    const { product } = this.props;
    const {
      img,
      name,
      price,
    } = product;

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
              <div className="label-field">
                $
                {price}
              </div>
              <AddToCartForm product={product} onSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </Grid>
      );
    }

    return (
      <div className="product">
        {elem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => {
    dispatch(fetchProductAPI(id));
  },
});

Product.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
