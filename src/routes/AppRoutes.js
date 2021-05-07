import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import { adminRoutes, publicRoutes } from './routes';
import { USER_ROUTE } from '../utils/consts';

const AppRoutes = () => {
  return (
    <Switch>
      {
        // проверка на авторизацию пользователя
        // user.isAuth &&
        // если true пользователю открыти роуты для авторизованых
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))
      }

      <Route component={UserRoutes} path={USER_ROUTE} />

      {/* public открыти всем */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Switch>
  );
};

export default AppRoutes;
