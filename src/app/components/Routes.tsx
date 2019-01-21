import React from 'react';
import { Route, Switch } from 'react-router';
import CounterPage from './pages/CounterPage';
import HelloPage from './pages/HelloPage';
import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';

const Routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/hello" component={HelloPage} />
    <Route path="/counter" component={CounterPage} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default Routes;