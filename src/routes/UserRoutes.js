import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import { userRoutes } from './routes';

const UserRoutes = () => {
  return (
    <Container>
      <AsideBar />
      <Switch>
        {userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      </Switch>
    </Container>
  );
};

export default UserRoutes;
