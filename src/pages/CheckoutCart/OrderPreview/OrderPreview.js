import React from 'react';
import CartList from '../../../components/CartList/CartList';
import styles from './OrderPreview.module.scss';

const OrderPreview = () => {
  return (
    <div className={`${styles.container} checkout__orders-preview`}>
      <div className={styles.previewContant}>
        <h3 className='checkout__title'>Ваш заказ</h3>
        <CartList containerClass={styles.cartItem} />
      </div>
    </div>
  );
};

export default OrderPreview;
