import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PAGE404_ROUTE } from '../utils/consts';
import Page404 from '../pages/Page404/Page404';
import AppRoutes from './AppRoutes';

const InitialRoutes = () => {
  return (
    <Switch>
      <Route key={PAGE404_ROUTE} path={PAGE404_ROUTE} component={Page404} exact />
      <AppRoutes />
    </Switch>
  );
};

export default InitialRoutes;
