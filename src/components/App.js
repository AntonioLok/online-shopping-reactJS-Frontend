import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NavMenu from './common/nav-menu';
import NavHeader from './common/nav-header';
import Products from './products';
import Product from './product';
import Home from './home';

import '../stylesheets/app.scss';

const history = createHistory();

const App = () => (
  <Router history={history}>
    <div className="app-container">
      <NavMenu />
      <NavHeader history={history} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products/:section/:type" component={Products} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </div>
  </Router>
);

export default App;
