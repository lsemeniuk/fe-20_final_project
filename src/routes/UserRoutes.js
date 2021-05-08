import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import { userRoutes } from './routes';
import { PERSONAL_INFO_ROUTE, ORDERS_ROUTE, WISH_LIST_ROUTE } from '../utils/consts';

const links = [
  { url: PERSONAL_INFO_ROUTE, description: 'Персональная информация' },
  { url: ORDERS_ROUTE, description: 'Заказы' },
  { url: WISH_LIST_ROUTE, description: 'Список желаний' },
];

const UserRoutes = () => {
  return (
    <main>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <AsideBar links={links} />
          <Switch>
            {userRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
          </Switch>
        </div>
      </Container>
    </main>
  );
};

export default UserRoutes;
