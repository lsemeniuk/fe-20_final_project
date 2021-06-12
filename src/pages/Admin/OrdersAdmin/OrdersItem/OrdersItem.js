import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../../../utils/func';
import Status from './Status/Status';
import OrdersInfo from './OrdersInfo/OrdersInfo';
import styles from './OrdersItem.module.scss';

const OrdersItem = ({ order }) => {
  const [showOrderInfo, setShowOrderInfo] = useState(false);

  const { orderNo, firstName, lastName, status, _id: id, date } = order;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div>
            Заказ № <span className={styles.bold}>{orderNo}</span>, {getDate(date)}
          </div>
          <div>
            Имя покупателя:{' '}
            <span className={styles.bold}>
              {firstName}&nbsp;{lastName}
            </span>
          </div>
        </div>
        <Status status={status} id={id} />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.infoOrderBtn}>
          {showOrderInfo ? (
            <div onClick={() => setShowOrderInfo(false)}>&uArr; Закрыть информацию о заказе &uArr;</div>
          ) : (
            <div onClick={() => setShowOrderInfo(true)}>&dArr; Открыть информацию о заказе &dArr;</div>
          )}
        </div>
        {showOrderInfo && <OrdersInfo order={order} />}
      </div>
    </div>
  );
};

OrdersItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrdersItem;
