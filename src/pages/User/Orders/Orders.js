import React, { useEffect, useState } from 'react';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import { getCustomerOrders } from '../../../http/ordersAPI';
import Order from './Order/Order';

const Orders = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    getCustomerOrders().then(res => {
      if (res.data.length === 0) {
        setOrders(null);
      } else {
        setOrders(res.data);
      }
    });
  }, []);

  const ordersWrapper = orders ? (
    orders.map(order => {
      return <Order order={order} />;
    })
  ) : (
    <div>У вас пока нет заказов</div>
  );

  return (
    <ContainerPage>
      <div>
        <h2>Заказы</h2>
      </div>

      <div>{ordersWrapper}</div>
    </ContainerPage>
  );
};

export default Orders;
