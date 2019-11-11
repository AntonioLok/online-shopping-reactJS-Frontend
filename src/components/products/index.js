import React, { Component } from 'react';
import {
  Grid, Row, Col, MenuItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from './product-list';
import { TYPES } from '../../constants/index';
import fetchProducts from '../../store/actions/products';

class Products extends Component {
  componentDidMount() {
    const { dispatchfetchProducts, match } = this.props;
    const { section, type } = match.params;
    dispatchfetchProducts(section, type);
  }

  componentDidUpdate(prevProps) {
    const { dispatchfetchProducts, match } = this.props;
    const { section, type } = match.params;
    if (section !== prevProps.match.params.section || type !== prevProps.match.params.type) {
      dispatchfetchProducts(section, type);
    }
  }

  renderSectionList(type) {
    const { history, match } = this.props;
    const { section } = match.params;

    return (
      <MenuItem key={type} onClick={() => history.push(`/products/${section}/${type}`)}>
        {type}
      </MenuItem>
    );
  }

  render() {
    const { match, productsState, history } = this.props;
    const { section } = match.params;

    const products = productsState.data;
    return (
      <div className="os--products">
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <ul>
                {TYPES[section].map(type => this.renderSectionList(type))}
              </ul>
            </Col>
            <ProductList products={products} history={history} />
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsState: state.products,
});

const mapDispatchToProps = dispatch => ({
  dispatchfetchProducts: (section, type) => {
    dispatch(fetchProducts(section, type));
  },
});

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      section: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchfetchProducts: PropTypes.func.isRequired,
  productsState: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      quantity: PropTypes.number,
      size: PropTypes.string,
      img: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      sizeAvailable: PropTypes.arrayOf(PropTypes.string),
    })),
    statusCode: PropTypes.number,
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
