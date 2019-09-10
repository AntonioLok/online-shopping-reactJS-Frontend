import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import _ from 'lodash';
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
  shouldComponentUpdate(nextProps) {
    const { loginState } = this.props;
    // deep comparisons
    return !_.isEqual(loginState, nextProps.loginState);
  }

  render() {
    const token = localStorage.getItem('OS_AUTH_TOKEN');

    let isAuthenticated = false;
    if (token) {
      const decoded = jwtDecode(token);
      if (Date.now() < decoded.exp * 1000) {
        isAuthenticated = true;
      } else {
        localStorage.removeItem('OS_AUTH_TOKEN');
      }
    }

    return (
      <Router history={history}>
        <div className="app-container">
          <NavMenu isAuthenticated={isAuthenticated} />
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
  loginState: state.login,
});

App.propTypes = {
  loginState: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
    statusText: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
)(App);
