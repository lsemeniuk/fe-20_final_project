import React from 'react';
import styles from './DeliveryInfo.module.scss';

const ProductDetails = () => (
  <ul className={styles.ul}>
    <li className={styles.li}>Сенсорный 1.3” AMOLED дисплей</li>
    <li className={styles.li}>11 спортивных режимов</li>
    <li className={styles.li}>Датчик геопозиционирования GPS</li>
    <li className={styles.li}>Защита от пыли и влаги (плавание и душ не рекомендованы)</li>
    <li className={styles.li}>Закаленное стекло Corning Gorilla 3</li>
    <li className={styles.li}>До 5-ти дней автономной работы</li>
    <li className={styles.li}>Вес – 46 граммов</li>
  </ul>
);
export default ProductDetails;
