import React, { Component } from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
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
import { ROUTES } from '../constants';
import '../stylesheets/app.scss';
import getIsAuthenticated from '../utils/auth/get-is-authenticated';

const history = createHistory();
const {
  home, register, products, product, login,
} = ROUTES;

class App extends Component {
  shouldComponentUpdate(nextProps) {
    const { loginState } = this.props;
    return !_.isEqual(loginState, nextProps.loginState);
  }

  render() {
    const isAuthenticated = getIsAuthenticated();

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
