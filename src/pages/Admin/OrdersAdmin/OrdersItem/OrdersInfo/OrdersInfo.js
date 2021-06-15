import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../../../../utils/func';
import ProductOrdersItem from '../ProductOrdersItem/ProductOrdersItem';
import SpecifyOrder from '../SpecifyOrder/SpecifyOrder';
import styles from './OrdersInfo.module.scss';

const OrdersInfo = ({ order }) => {
  const [specifyOrderState, setspecifyOrderState] = useState(false);
  const [orderState, setOrderState] = useState(order);
  const { email, mobile, paymentInfo, deliveryAddress, totalSum, comment, products, status, _id: id } = orderState;

  const productList = products.map(p => {
    return (
      <li key={p.product.itemNo}>
        <ProductOrdersItem product={p} />
      </li>
    );
  });

  return (
    <div className={styles.info}>
      {status === 'specified' && (
        <div className={styles.specify} onClick={() => setspecifyOrderState(!specifyOrderState)}>
          Уточнить заказ
        </div>
      )}
      <div>
        Email заказчика: <span className={styles.bold}>{email}</span>
      </div>
      <div>
        Номер мобильного телефона: <span className={styles.bold}>{mobile}</span>
      </div>
      {specifyOrderState ? (
        <SpecifyOrder
          orderId={id}
          order={order}
          setspecifyOrderState={setspecifyOrderState}
          setOrderState={setOrderState}
        />
      ) : (
        <div>
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
            Комментарий: <span className={styles.bold}>{comment}</span>
          </div>
        </div>
      )}

      <div>
        Сумма к оплате: <span className={styles.bold}>{replace(totalSum)} грн.</span>
      </div>
      <div>
        Заказ:{` `}
        <ul className={styles.productList}>{productList}</ul>
      </div>
    </div>
  );
};

OrdersInfo.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrdersInfo;
