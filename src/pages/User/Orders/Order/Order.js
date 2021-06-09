import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Order.module.scss';
import { PRODUCT_ROUTE } from '../../../../utils/consts';

const Order = order => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const content = useRef(null);
  const {
    status,
    firstName,
    email,
    mobile,
    lastName,
    orderNo,
    date,
    totalSum,
    paymentInfo,
    deliveryAddress,
    products,
    // eslint-disable-next-line react/destructuring-assignment
  } = order.order;

  const openDescription = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : `${content.current.scrollHeight}px`);
  };

  const orderedProducts = products.map(i => {
    const { product } = i;
    return (
      <div className={styles.productItem}>
        <img src={product.imageUrls[0].smallImage} width={100} alt='' />
        <div>
          <NavLink to={`${PRODUCT_ROUTE}/${product.itemNo}`} className={styles.productLink}>
            {product.name}
          </NavLink>
          <p>Цена: {product.currentPrice}</p>
          <p>Кол-во: {i.cartQuantity}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={`${styles.orderWrapper} ${active}`} onClick={openDescription}>
      <div className={styles.orderHeader}>
        <div>Заказ №{orderNo}</div>
        <div>{totalSum} грн</div>
      </div>
      <div className={styles.orderDetails}>
        <div>
          {products.map(product => {
            return <p className={styles.productName}>{product.product.name}</p>;
          })}
        </div>
        <div>
          <span className={styles.date}>Дата заказа: {date}</span>
        </div>
      </div>

      <div ref={content} style={{ height: `${height}` }} className={styles.orderDescription}>
        <hr />

        <div className={styles.userDataTable}>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Status</p>
            <p>{status}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Name surname</p>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Email</p>
            <p>{email}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Phone number</p>
            <p>{mobile}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Shipping methods</p>
            <p>{deliveryAddress.delivery}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Address</p>
            <p>{deliveryAddress.city}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Payment methods</p>
            <p>{paymentInfo}</p>
          </div>
        </div>
        <div className={styles.productPreview}>
          <p>Ваш заказ</p>
          <hr />
          {orderedProducts}
          <span className={styles.totalPrice}>Итого к оплате: {totalSum} грн</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
