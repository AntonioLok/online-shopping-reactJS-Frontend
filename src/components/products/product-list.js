import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

class ProductList extends React.Component {
  renderProducts(product) {
    const {
      name,
      price,
      img,
      _id,
    } = product;

    const { history } = this.props;
    return (
      <Col xs={6} md={4} key={img} className="single-product">
        <div className="image" onClick={() => history.push(`/product/${_id}`)} role="presentation">
          <img alt={name} src={img} />
        </div>
        <div className="name">{name}</div>
        <div className="price">
          $
          {price}
        </div>
      </Col>
    );
  }

  render() {
    const { products } = this.props;

    let elem = null;

    if (products.length !== 0) {
      elem = (
        <Col xs={12} md={9} className="product-list">
          {products.map(product => this.renderProducts(product))}
        </Col>
      );
    }

    return elem;
  }
}

ProductList.propTypes = {
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
