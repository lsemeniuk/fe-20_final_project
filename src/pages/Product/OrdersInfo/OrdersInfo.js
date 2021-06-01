import React from 'react';
import styles from './OrdersInfo.module.scss';

const OrdersInfo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>Доставка</div>
        <div>
          <ul className={styles.list}>
            <li>
              Самовывоз из нашего магазина — <span className={styles.green}>Бесплатно</span>
            </li>
            <li>Самовывоз из Новой Почты — 50 грн.</li>
            <li>Курьер в ваш адрес — 70 грн.</li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Оплата</div>
        <div>
          <ul className={styles.list}>
            <li>Оплата при получении товара</li>
            <li>Картой онлайн</li>
            <li>Google Pay</li>
            <li>Apple Pay</li>
            <li>Privat Pay</li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Гарантия</div>
        <ul className={styles.list}>
          <li>Обмен / возврат товара в течение 14 дней</li>
        </ul>
      </div>
    </div>
  );
};

export default OrdersInfo;
