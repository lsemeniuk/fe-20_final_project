import React from 'react';
import CartList from '../../../components/CartList/CartList';
import styles from './OrderPreview.module.scss';

const OrderPreview = () => {
  return (
    <div className={`${styles.container} checkout__orders-preview`}>
      <p className={styles.title}>Ваш заказ</p>
      <hr />
      <CartList containerClass={styles.cartItem} />
    </div>
  );
};

export default OrderPreview;
