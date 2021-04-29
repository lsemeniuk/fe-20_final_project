import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { PAGE404_ROUTE } from '../utils/consts';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => {
  return (
    <>
      <NavBar />
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
        <Redirect to={PAGE404_ROUTE} />
      </Switch>
      <Footer />
    </>
  );
};

export default AppRoutes;
