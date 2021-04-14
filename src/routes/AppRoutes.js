import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { INDEX_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <Switch>
      {
        // проверка на авторизацию пользователя
        // user.isAuth &&
        // если true пользователю открыти роуты для авторизованых
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))
      }
      {/* public открыти всем */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {/* если ввёден любой другой адрес редиректим на главную */}
      <Redirect to={INDEX_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
