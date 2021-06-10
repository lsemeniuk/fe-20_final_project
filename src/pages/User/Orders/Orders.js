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

  const ordersList = orders ? (
    orders.map(order => {
      return (
        <li key={order.orderNo}>
          <Order order={order} />
        </li>
      );
    })
  ) : (
    <div>У вас пока нет заказов</div>
  );

  return (
    <ContainerPage>
      <div>
        <h2>Заказы</h2>
      </div>

      <ul>{ordersList}</ul>
    </ContainerPage>
  );
};

export default Orders;
