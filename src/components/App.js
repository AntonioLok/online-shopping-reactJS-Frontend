import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../stylesheets/app.scss';
import NavMenu from './common/nav-menu';
import NavHeader from './common/nav-header';
import Home from './home';

const App = () => (
  <Router>
    <div className="app-container">
      <NavMenu />
      <NavHeader />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
