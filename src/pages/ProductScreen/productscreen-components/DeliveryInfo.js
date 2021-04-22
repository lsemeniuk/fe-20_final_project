import React from 'react';
import styles from './DeliveryInfo.module.scss';

const DeliveryInfo = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>Новой почтой по Украине — 30 грн.</li>
    <li className={styles.li}>Курьером к двери по Киеву — 40 грн.</li>
  </ul>
);
export default DeliveryInfo;
