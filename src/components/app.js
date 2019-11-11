import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import NavMenu from './common/nav-menu';
import NavHeader from './common/nav-header';
import Products from './products';
import Product from './product';
import Register from './user/register';
import Login from './user/login';
import Home from './home';
import Cart from './cart';
import { ROUTES } from '../constants';
import { fetchCart } from '../store/actions/cart';
import '../stylesheets/app.scss';
import getUnauthenticatedCartProducts from '../utils/cart-products/get-unauthenticated-cart-products';
import getIsAuthenticated from '../utils/auth/get-is-authenticated';

const history = createHistory();
const {
  home, register, products, product, login, cart,
} = ROUTES;
class App extends Component {
  constructor() {
    super();
    this.state = {
      unauthenticatedCartProducts: getUnauthenticatedCartProducts(),
    };
    this.updateUnauthenticatedUserCart = this.updateUnauthenticatedUserCart.bind(this);
  }

  componentDidMount() {
    const isAuthenticated = getIsAuthenticated();
    if (isAuthenticated) {
      const { dispatchFetchCart } = this.props;
      dispatchFetchCart();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { loginState, cartState } = this.props;
    return !_.isEqual(loginState, nextProps.loginState)
    || !_.isEqual(cartState, nextProps.cartState)
    || !_.isEqual(this.state, nextState);
  }

  componentDidUpdate(prevProps) {
    const { loginState } = this.props;
    if (!_.isEqual(loginState, prevProps.loginState) && loginState.statusCode === 200) {
      const { dispatchFetchCart } = this.props;
      dispatchFetchCart();
    }
  }

  updateUnauthenticatedUserCart(unauthenticatedCartProducts) {
    this.setState({ unauthenticatedCartProducts });
  }

  render() {
    const { cartState } = this.props;
    const { unauthenticatedCartProducts } = this.state;
    const isAuthenticated = getIsAuthenticated();
    const cartProps = {
      isAuthenticated,
      cartProducts: isAuthenticated ? cartState.data : unauthenticatedCartProducts,
      updateUnauthenticatedUserCart: this.updateUnauthenticatedUserCart,
    };

    return (
      <Router history={history}>
        <div className="app-container">
          <NavMenu {...cartProps} />
          <NavHeader history={history} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/home" />
              )}
            />
            <Route exact path={home} component={Home} />
            <Route exact path={products} component={Products} />
            <Route exact path={register} component={Register} />
            <Route exact path={login} component={Login} />
            <Route
              exact
              path={product}
              render={
                props => (
                  <Product
                    {...props}
                    {...cartProps}
                  />
                )}
            />
            <Route
              exact
              path={cart}
              render={
                props => (
                  <Cart {...props} {...cartProps} />
                )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.login,
  cartState: state.cart,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchCart: () => {
    dispatch(fetchCart());
  },
});

App.propTypes = {
  loginState: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
    statusText: PropTypes.string,
  }).isRequired,
  dispatchFetchCart: PropTypes.func.isRequired,
  cartState: PropTypes.shape({
    statusCode: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      quantity: PropTypes.number,
      size: PropTypes.string,
      img: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      sizeAvailable: PropTypes.arrayOf(PropTypes.string),
    })),
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
