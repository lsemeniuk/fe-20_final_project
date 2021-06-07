import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OrdersItem.module.scss';
import { replace } from '../../../../utils/func';
import { PRODUCT_ROUTE } from '../../../../utils/consts';

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
  } = order;

  let statusElement = null;

  if (status === 'specified') {
    statusElement = <div style={{ color: '#FF0000' }}>Уточняется</div>;
  } else if (status === 'processed') {
    statusElement = <div style={{ color: '#FF8C00' }}>Обрабатывается</div>;
  } else if (status === 'send') {
    statusElement = <div style={{ color: '#0000FF' }}>Отправлен</div>;
  } else if (status === 'сompleted') {
    statusElement = <div style={{ color: '#008000' }}>Выполнен</div>;
  }

  let productList = null;

  if (showOrderInfo) {
    productList = products.map(p => {
      return (
        <div className={styles.productList}>
          <div className={styles.productImage}>
            <NavLink to={`${PRODUCT_ROUTE}/${p.product.itemNo}`}>
              <img src={p.product.imageUrls[0].smallImage} width={100} height={100} alt='productImage' />
            </NavLink>
          </div>
          <div>
            <NavLink to={`${PRODUCT_ROUTE}/${p.product.itemNo}`}>
              <div className={`${styles.bold} ${styles.productName}`}>
                {p.product.name}, {p.product.color}
              </div>
            </NavLink>
            <div className={styles.productPrice}>
              <div>
                Цена: <span className={styles.bold}>{replace(p.product.currentPrice)} грн.</span>
              </div>
              <div>
                Количество: <span className={styles.bold}>{p.cartQuantity} шт.</span>
              </div>
              <div>
                Сумма: <span className={styles.bold}>{replace(p.product.currentPrice * p.cartQuantity)} грн.</span>
              </div>
            </div>
          </div>
        </div>
      );
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
        {statusElement}
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
            <div>{productList}</div>
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
