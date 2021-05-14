import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import Loader from '../components/Loader/Loader';
import Page404 from '../pages/Page404/Page404';
import { getCustomerIsLoadingSelector, getCustomerSelector } from '../store/customer/selectors';
import { adminRoutes } from './routes';

const links = adminRoutes.map(route => {
  return { url: route.path, description: route.name };
});

const AdminRoutes = () => {
  const customer = useSelector(getCustomerSelector);
  const customerIsLoading = useSelector(getCustomerIsLoadingSelector);

  if (!customer.isAdmin) {
    return <>{customerIsLoading ? <Page404 /> : <Loader />}</>;
  }

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
