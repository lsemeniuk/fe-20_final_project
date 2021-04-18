import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Index from '../pages/Index/Index';

function AppRoutes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/index" />
      <Route exact path="/index">
        <Index />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
