import React from 'react';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NavMenu from './common/nav-menu';
import NavHeader from './common/nav-header';
import Products from './products';
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
        <Route exact path="/:section/:type" component={Products} />
      </Switch>
    </div>
  </Router>
);

export default App;
