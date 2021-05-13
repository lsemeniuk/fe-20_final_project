import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getCustomerIsAuthSelector, getCustomerSelector } from '../store/customer/selectors';
import UserRoutes from './UserRoutes';
import { publicRoutes } from './routes';
import { ADMIN_ROUTE, PAGES_ROUTE, USER_ROUTE } from '../utils/consts';
import AdminRoutes from './AdminRoutes';
import PagesRoutes from './PagesRoutes';

const AppRoutes = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const customer = useSelector(getCustomerSelector);

  return (
    <Switch>
      <Route component={PagesRoutes} path={PAGES_ROUTE} />
      {isAuth && <Route component={UserRoutes} path={USER_ROUTE} />}
      {customer.isAdmin && <Route component={AdminRoutes} path={ADMIN_ROUTE} />}

      {/* public открыти всем */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Switch>
  );
};

export default AppRoutes;
