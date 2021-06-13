import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '../components/Container/Container';
import { userRoutes } from './routes';
import { getCustomerIsAuthSelector, getCustomerIsLoadingSelector } from '../store/customer/selectors';
import Loader from '../components/Loader/Loader';
import Page404 from '../pages/Page404/Page404';

const UserRoutes = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const customerIsLoading = useSelector(getCustomerIsLoadingSelector);

  if (!isAuth) {
    return <>{customerIsLoading ? <Loader /> : <Page404 />}</>;
  }

  return (
    <main>
      <Container>
        <div>
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
