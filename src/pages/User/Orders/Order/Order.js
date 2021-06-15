import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../utils/consts';
import { getDate } from '../../../../utils/func';
import Button from '../../../../components/Button/Button';
import styles from './Order.module.scss';

const Order = order => {
  const [active, setActive] = useState(false);
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

  let statusElement = null;

  if (status === 'specified') {
    statusElement = <p style={{ color: '#FF0000' }}>Уточняется</p>;
  } else if (status === 'processed') {
    statusElement = <p style={{ color: '#FF8C00' }}>Обрабатывается</p>;
  } else if (status === 'send') {
    statusElement = <p style={{ color: '#0000FF' }}>Отправлен</p>;
  } else if (status === 'completed') {
    statusElement = <p style={{ color: '#008000' }}>Выполнен</p>;
  }

  const openDescription = () => {
    setActive(!active);
    setHeight(active ? '0px' : `${content.current.scrollHeight}px`);
  };

  const orderedProducts = products.map(i => {
    const { product } = i;
    const { _id: id } = product;
    return (
      <div key={id} className={styles.productItem}>
        <NavLink to={`${PRODUCT_ROUTE}/${product.itemNo}`} className={styles.productLink}>
          <img src={product.imageUrls[0].smallImage} width={100} alt='' />
        </NavLink>
        <div className={styles.productDescription}>
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
    <div className={`${styles.orderWrapper} ${active}`}>
      <div className={styles.orderHeader}>
        <div>Заказ №{orderNo}</div>
        <div>{totalSum} грн</div>
      </div>
      <div className={styles.orderDetails}>
        <div>
          {products.map(product => {
            const { _id: id } = product;
            return (
              <p key={id} className={styles.productName}>
                {product.product.name}
              </p>
            );
          })}
        </div>
        <div>
          <span className={styles.date}>Дата заказа: {getDate(date)}</span>
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={openDescription} variant='outline' title='Детальная информация' />
        </div>
      </div>

      <div ref={content} style={{ height: `${height}` }} className={styles.orderDescription}>
        <hr />

        <div className={styles.userDataTable}>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Статус</p>
            {statusElement}
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Имя и фамилия</p>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Почта</p>
            <p>{email}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Номер телефона</p>
            <p>{mobile}</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Город</p>
            {deliveryAddress.city ? <p>{deliveryAddress.city}</p> : <p style={{ color: 'red' }}>Город не указан</p>}
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Область</p>
            {deliveryAddress.region ? (
              <p>{deliveryAddress.region}</p>
            ) : (
              <p style={{ color: 'red' }}>Область не указана</p>
            )}
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Адрес</p>
            {deliveryAddress.address ? (
              <p>{deliveryAddress.address}</p>
            ) : (
              <p style={{ color: 'red' }}>Адрес не указан</p>
            )}
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Способ доставки</p>
            {deliveryAddress.delivery ? (
              <p>{deliveryAddress.delivery}</p>
            ) : (
              <p style={{ color: 'red' }}>Способ доставки не указан</p>
            )}
          </div>
          <div className={styles.tableRow}>
            <p className={styles.tableRowTitle}>Способ оплаты</p>
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
