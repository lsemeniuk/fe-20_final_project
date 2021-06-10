import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import { publicRoutes } from './routes';
import { ADMIN_ROUTE, PAGES_ROUTE, USER_ROUTE } from '../utils/consts';
import AdminRoutes from './AdminRoutes';
import PagesRoutes from './PagesRoutes';

const AppRoutes = () => {
  return (
    <Switch>
      <Route component={PagesRoutes} path={PAGES_ROUTE} />
      <Route component={UserRoutes} path={USER_ROUTE} />
      <Route component={AdminRoutes} path={ADMIN_ROUTE} />

      {/* public открыти всем */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Switch>
  );
};

export default AppRoutes;
