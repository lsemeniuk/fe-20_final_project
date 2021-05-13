import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';

import Container from '../components/Container/Container';
import { userRoutes } from './routes';
import { PERSONAL_INFO_ROUTE, ORDERS_ROUTE, WISH_LIST_ROUTE } from '../utils/consts';
import { getCustomerIsAuthSelector } from '../store/customer/selectors';
import Loader from '../components/Loader/Loader';

const links = [
  { url: PERSONAL_INFO_ROUTE, description: 'Личные данные' },
  { url: ORDERS_ROUTE, description: 'Заказы' },
  { url: WISH_LIST_ROUTE, description: 'Список желаний' },
];

const UserRoutes = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);

  if (!isAuth) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

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
