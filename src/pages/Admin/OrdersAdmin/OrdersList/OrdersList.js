import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Loader from '../../../../components/Loader/Loader';
import { getAllOrders } from '../../../../http/ordersAPI';
import OrdersItem from '../OrdersItem/OrdersItem';
import styles from './OrdersList.module.scss';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [refreshOrders, setRefreshOrders] = useState(true);
  // const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    setOrdersLoading(true);
    getAllOrders({ perPage: 5, startPage: 1 }).then(res => {
      setOrders(res.data.orders);
      setRefreshOrders(false);
      setOrdersLoading(false);
    });
  }, [refreshOrders]);

  if (ordersLoading) {
    return <Loader />;
  }

  const ordersList = orders.map(order => {
    return (
      <li key={order.orderNo}>
        <OrdersItem order={order} />
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Button title='обновить' className={styles.update} onClick={() => setRefreshOrders(true)} />
      <ul>{ordersList}</ul>
    </div>
  );
};

export default OrdersList;
