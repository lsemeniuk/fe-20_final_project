import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
// import ProductScreen from '../pages/ProductScreen/ProductScreen';
import ProductScreenAdaptive from '../pages/ProductScreenAdaptive/ProductScreenAdaptive';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route path='/product/id' component={ProductScreenAdaptive} />
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}
export default AppRoutes;
