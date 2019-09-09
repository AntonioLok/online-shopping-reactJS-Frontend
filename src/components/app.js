import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavMenu from './common/nav-menu';
import NavHeader from './common/nav-header';
import Products from './products';
import Product from './product';
import Register from './user/register';
import Login from './user/login';
import Home from './home';
import { ROUTES } from '../constants';
import '../stylesheets/app.scss';

const history = createHistory();
const {
  home, register, products, product, login,
} = ROUTES;

class App extends Component {
  render() {
    const { authenticationState, loginState } = this.props;
    const token = localStorage.getItem('OS_AUTH_TOKEN');
    // if there is no token, there is no need to validate. If there is an status code on any of
    // authenticationState or loginState, then the token has been validated.
    const isTokenValidated = !token || !!authenticationState.statusCode || !!loginState.statusCode;
    const isAuthenticated = authenticationState.statusCode === 200 || loginState.statusCode === 200;
    // will be re-used for the cart component
    const authenticationProps = {
      isTokenValidated,
      isAuthenticated,
    };

    return (
      <Router history={history}>
        <div className="app-container">
          <NavMenu {...authenticationProps} />
          <NavHeader history={history} />
          <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={products} component={Products} />
            <Route exact path={product} component={Product} />
            <Route exact path={register} component={Register} />
            <Route exact path={login} component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authenticationState: state.authentication,
  loginState: state.login,
});


App.propTypes = {
  authenticationState: PropTypes.shape({
    statusCode: PropTypes.number,
    data: PropTypes.shape({
      id: PropTypes.string,
      exp: PropTypes.number,
      iat: PropTypes.number,
    }),
    statusText: PropTypes.string,
  }).isRequired,
  loginState: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
)(App);
