import React from 'react';
import {
  Grid, Row, Col, MenuItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductList from './productList';
import { TYPES } from '../../constants/index';
import { fetchAllProducts } from '../../store/actions/products';

class Products extends React.Component {
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
      <MenuItem key={type} onClick={() => history.push(`/${section}/${type}`)}>
        {type}
      </MenuItem>
    );
  }

  render() {
    const { match, products, history } = this.props;
    const { section } = match.params;

    return (
      <div className="products">
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
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: (section, type) => {
    dispatch(fetchAllProducts(section, type));
  },
});

Products.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
