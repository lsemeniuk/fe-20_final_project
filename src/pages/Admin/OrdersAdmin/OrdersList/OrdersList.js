import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Loader from '../../../../components/Loader/Loader';
import { getAllOrders } from '../../../../http/ordersAPI';
import Pagination from '../../../../components/Pagination/Pagination';
import OrdersItem from '../OrdersItem/OrdersItem';
import styles from './OrdersList.module.scss';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [refreshOrders, setRefreshOrders] = useState(true);
  const [statusFilter, setStatusFilter] = useState('Все заказы');
  const [startPage, setStartPage] = useState(1);
  const [ordersQuantity, setOrdersQuantity] = useState(0);

  const perPage = 10;

  let ordersFilter = {};
  if (statusFilter === 'Все заказы') {
    ordersFilter = { perPage, startPage: 1, sort: '-date' };
  } else {
    ordersFilter = { perPage, startPage: 1, sort: '-date', status: statusFilter };
  }

  useEffect(() => {
    setOrdersLoading(true);
    getAllOrders(ordersFilter).then(res => {
      setOrders(res.data.orders);
      setOrdersQuantity(res.data.ordersQuantity);
      setRefreshOrders(false);
      setOrdersLoading(false);
    });
  }, [refreshOrders, startPage]);
  let ordersList = null;

  if (!ordersLoading) {
    ordersList = orders.map(order => {
      return (
        <li key={order.orderNo}>
          <OrdersItem order={order} />
        </li>
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select
          onChange={e => {
            setStatusFilter(e.target.value);
            setRefreshOrders(true);
          }}
          defaultValue={null}
          className={styles.select}
        >
          <option>Все заказы</option>
          <option value='specified'>Уточняются</option>
          <option value='processed'>Обрабатыватся</option>
          <option value='send'>Отправлены</option>
          <option value='completed'>Выполнены</option>
        </select>
        <Button title='обновить' className={styles.refresh} onClick={() => setRefreshOrders(true)} />
      </div>
      {ordersLoading ? <Loader /> : <ul>{ordersList}</ul>}
      <Pagination perPage={perPage} startPage={startPage} setPage={setStartPage} productsQuantity={ordersQuantity} />
    </div>
  );
};

export default OrdersList;
