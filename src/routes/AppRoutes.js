import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import ProductScreen from '../pages/ProductScreen/ProductScreen';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/product/currentID' component={ProductScreen} />
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
