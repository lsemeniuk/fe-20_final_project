import React from 'react';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import OrdersList from './OrdersList/OrdersList';

const OrdersAdmin = () => {
  return (
    <ContainerPage>
      <OrdersList />
    </ContainerPage>
  );
};

export default OrdersAdmin;
