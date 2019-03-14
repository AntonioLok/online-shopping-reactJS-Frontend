import React, { Component } from 'react';
import {
  Grid, Row, Col, MenuItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from './product-list';
import { TYPES } from '../../constants/index';
import { fetchProductsAPI } from '../../store/actions/products';
// import { getDataFromState } from '../../utils';

class Products extends Component {
  componentDidMount() {
    const { fetchProducts, match } = this.props;
    const { section, type } = match.params;
    fetchProducts(section, type);
  }

  componentDidUpdate(prevProps) {
    const { fetchProducts, match } = this.props;
    const { section, type } = match.params;
    if (section !== prevProps.match.params.section || type !== prevProps.match.params.type) {
      fetchProducts(section, type);
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
  fetchProducts: (section, type) => {
    dispatch(fetchProductsAPI(section, type));
  },
});

Products.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  productsState: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
