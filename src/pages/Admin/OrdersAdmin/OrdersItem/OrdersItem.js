import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../../../utils/func';
import styles from './OrdersItem.module.scss';
import Status from './Status/Status';
import ProductOrdersItem from './ProductOrdersItem/ProductOrdersItem';

const OrdersItem = ({ order }) => {
  const [showOrderInfo, setShowOrderInfo] = useState(false);
  const {
    orderNo,
    firstName,
    lastName,
    status,
    email,
    mobile,
    paymentInfo,
    deliveryAddress,
    totalSum,
    products,
    comment,
    _id: id,
  } = order;

  let productList = null;

  if (showOrderInfo) {
    productList = products.map(p => {
      return <ProductOrdersItem product={p} />;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <div>
            Заказ № <span className={styles.bold}>{orderNo}</span>
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
        {showOrderInfo && (
          <div className={styles.info}>
            <div>
              Email заказчика: <span className={styles.bold}>{email}</span>
            </div>
            <div>
              Номер мобильного телефона: <span className={styles.bold}>{mobile}</span>
            </div>
            <div>
              Способ оплаты: <span className={styles.bold}>{paymentInfo}</span>
            </div>
            <div>
              Способ Доставки: <span className={styles.bold}>{deliveryAddress?.delivery}</span>
            </div>
            {deliveryAddress && (
              <div>
                Адрес Доставки:{' '}
                <span className={styles.bold}>
                  {deliveryAddress?.region} обл., {deliveryAddress?.city}, {deliveryAddress?.address}.
                </span>
              </div>
            )}
            <div>
              Сумма к оплате: <span className={styles.bold}>{replace(totalSum)} грн.</span>
            </div>
            <div>
              Заказ:{` `}
              <div className={styles.productList}>{productList}</div>
            </div>
            <div>
              Комментарий: <span className={styles.bold}>{comment}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

OrdersItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrdersItem;
