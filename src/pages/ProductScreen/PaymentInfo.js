import React from 'react';
import styles from './DeliveryInfo.module.scss';

const PaymentInfo = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>Наличными при получении.</li>
    <li className={styles.li}>Кредитной картой в privat24, LiqPay</li>
    <li className={styles.li}>Через кассу или терминал самообслуживания Приватбанк.</li>
  </ul>
);

export default PaymentInfo;
