import React from 'react';
import { Route, Switch } from 'react-router';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';
import RouterParamsPage from './pages/RouterParamsPage';

const Routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/RouterParams" component={RouterParamsPage} />
    <Route path="/counter" component={CounterPage} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default Routes;