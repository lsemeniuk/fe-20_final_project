import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrdersInfo.module.scss';
import { replace } from '../../../../../utils/func';
import ProductOrdersItem from '../ProductOrdersItem/ProductOrdersItem';

const OrdersInfo = ({ order }) => {
  const { email, mobile, paymentInfo, deliveryAddress, totalSum, comment, products } = order;

  const productList = products.map(p => {
    return <ProductOrdersItem product={p} />;
  });

  return (
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
        Комментарий: <span className={styles.bold}>{comment}</span>
      </div>
      <div>
        Заказ:{` `}
        <div className={styles.productList}>{productList}</div>
      </div>
    </div>
  );
};

OrdersInfo.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrdersInfo;
