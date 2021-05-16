import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AsideBar from '../components/AsideBar/AsideBar';
import Container from '../components/Container/Container';
import ProductEdit from '../pages/Admin/AdminProducts/ProductEdit/ProductEdit';
import Loader from '../components/Loader/Loader';
import { getCustomerSelector } from '../store/customer/selectors';
import { adminRoutes } from './routes';

const links = adminRoutes.map(route => {
  return { url: route.path, description: route.name };
});

const AdminRoutes = () => {
  const customer = useSelector(getCustomerSelector);

  if (!customer.isAdmin) {
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
            {adminRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} component={Component} exact />
            ))}
            <Route path='/product/:id/edit' component={ProductEdit} exact />
          </Switch>
        </div>
      </Container>
    </main>
  );
};

export default AdminRoutes;
