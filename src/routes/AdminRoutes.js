import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import Admin from '../pages/Admin';
import { ADMIN_ROUTE } from '../utils/consts';

const AdminRoutes = () => {
  return (
    <Container>
      <AsideBar />
      <Switch>
        <Route exact path={ADMIN_ROUTE} component={Admin} />
      </Switch>
    </Container>
  );
};

export default AdminRoutes;
