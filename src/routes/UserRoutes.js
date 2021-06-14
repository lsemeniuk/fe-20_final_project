import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';

import Container from '../components/Container/Container';
import { userRoutes } from './routes';
import { PERSONAL_INFO_ROUTE, ORDERS_ROUTE, WISH_LIST_ROUTE } from '../utils/consts';
import { getCustomerIsAuthSelector, getCustomerIsLoadingSelector } from '../store/customer/selectors';
import Loader from '../components/Loader/Loader';
import Page404 from '../pages/Page404/Page404';
import styles from './UserRoutes.module.scss';

const links = [
  { url: PERSONAL_INFO_ROUTE, description: 'Личные данные' },
  { url: ORDERS_ROUTE, description: 'Заказы' },
  { url: WISH_LIST_ROUTE, description: 'Список желаний' },
];

const UserRoutes = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const customerIsLoading = useSelector(getCustomerIsLoadingSelector);
  const aside = true;

  if (!isAuth) {
    return <>{customerIsLoading ? <Loader /> : <Page404 />}</>;
  }

  return (
    <main>
      <Container>
        <div className={styles.container__aside_user}>
          <AsideBar links={links} aside={aside} />
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
