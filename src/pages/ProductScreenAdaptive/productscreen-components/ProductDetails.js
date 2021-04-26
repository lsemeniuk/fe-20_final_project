import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeliveryInfo.module.scss';

const ProductDetails = ({ setToggleDetails }) => (
  <ul className={styles.ul}>
    <li className={styles.details__header}>
      <h3>Описание</h3>
      <button type='button' className={styles.hide__details} onClick={() => setToggleDetails(false)}>
        &times;
      </button>
    </li>
    <li className={styles.li}>Сенсорный 1.3” AMOLED дисплей</li>
    <li className={styles.li}>11 спортивных режимов</li>
    <li className={styles.li}>Датчик геопозиционирования GPS</li>
    <li className={styles.li}>Защита от пыли и влаги (плавание и душ не рекомендованы)</li>
    <li className={styles.li}>Закаленное стекло Corning Gorilla 3</li>
    <li className={styles.li}>До 5-ти дней автономной работы</li>
    <li className={styles.li}>Вес – 46 граммов</li>
    <li>
      <img
        src='https://i.citrus.ua/uploads/content/product-photos/lysyanaya/december/av1.jpg?_t=1548256954'
        alt='product-demo'
      />
    </li>
  </ul>
);
ProductDetails.propTypes = {
  setToggleDetails: PropTypes.func.isRequired,
};
export default ProductDetails;
