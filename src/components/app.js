import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
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
  home, register, products, product, logIn,
} = ROUTES;

const App = () => (
  <Router history={history}>
    <div className="app-container">
      <NavMenu />
      <NavHeader history={history} />
      <Switch>
        <Route exact path={home} component={Home} />
        <Route exact path={products} component={Products} />
        <Route exact path={product} component={Product} />
        <Route exact path={register} component={Register} />
        <Route exact path={logIn} component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
