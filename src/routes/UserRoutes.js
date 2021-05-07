import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import Orders from '../pages/User/Orders/Orders';
import PersonalInfo from '../pages/User/PersonalInfo';
import WishList from '../pages/User/WishList/WishList';
import { ORDERS_ROUTE, USER_ROUTE, WISH_LIST_ROUTE } from '../utils/consts';

const UserRoutes = () => {
  return (
    <Container>
      <AsideBar />
      <Switch>
        <Route exact path={USER_ROUTE} component={PersonalInfo} />
        <Route exact path={ORDERS_ROUTE} component={Orders} />
        <Route exact path={WISH_LIST_ROUTE} component={WishList} />
      </Switch>
    </Container>
  );
};

export default UserRoutes;
