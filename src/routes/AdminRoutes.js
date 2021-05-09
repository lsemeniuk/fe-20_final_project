import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import { adminRoutes } from './routes';

const links = adminRoutes.map(route => {
  return { url: route.path, description: route.name };
});

const AdminRoutes = () => {
  return (
    <main>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <AsideBar links={links} />
          <Switch>
            {adminRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
          </Switch>
        </div>
      </Container>
    </main>
  );
};

export default AdminRoutes;
