import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeScreen from '../pages/HomeScreen/HomeScreen';
import ProductScreen from '../pages/ProductScreen/ProductScreen';

function AppRoutes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/currentID" component={ProductScreen} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default AppRoutes;
