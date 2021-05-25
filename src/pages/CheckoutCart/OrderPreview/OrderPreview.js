import React from 'react';
import styles from './OrderPreview.module.scss';

const OrderPreview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Ваш заказ</p>
      <hr />
    </div>
  );
};

export default OrderPreview;
