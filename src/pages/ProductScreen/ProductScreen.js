import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductScreen.module.scss';
import data from './data';
import Button from '../../components/Button/Button';
import DeliveryInfo from './DeliveryInfo';
import PaymentInfo from './PaymentInfo';
import WarrantyInfo from './WarrantyInfo';

const ProductScreen = () => {
  const [buttons, setButtons] = useState({
    deliveryActive: true,
    paymentActive: false,
    warrantyActive: false,
  });
  const [info, setInfo] = useState({
    deliveryInfo: true,
    paymentInfo: false,
    warrantyInfo: false,
  });

  const handleClickDelivery = () => {
    setButtons({ deliveryActive: true, paymentActive: false, warrantyActive: false });
    setInfo({ deliveryInfo: true, paymentInfo: false, warrantyInfo: false });
  };
  const handleClickPayment = () => {
    setButtons({ deliveryActive: false, paymentActive: true, warrantyActive: false });
    setInfo({ deliveryInfo: false, paymentInfo: true, warrantyInfo: false });
  };
  const handleClickWarranty = () => {
    setButtons({ deliveryActive: false, paymentActive: false, warrantyActive: true });
    setInfo({ deliveryInfo: false, paymentInfo: false, warrantyInfo: true });
  };
  return (
    <div className={styles.page__wrapper}>
      <div className={styles.row}>
        <div className={styles.col__one}>
          <h2>Product Screen</h2>
          <img className={styles.large} src={data.currentProduct.image} alt={data.currentProduct.name} />
        </div>
        <div className={styles.col__one}>
          <ul>
            <li>
              <span className={styles.location}>Главная &#62; Мужские</span>
            </li>
            <li>
              <h3>{data.currentProduct.name}</h3>
            </li>
            <li>
              <div className={styles.row__start}>
                <div>
                  {data.currentProduct.countInStock > 0 ? (
                    <span className={styles.success}>В наличии</span>
                  ) : (
                    <span className={styles.danger}>Отсутствует</span>
                  )}
                </div>
                <p>Артикул {data.currentProduct.itemNo}</p>
                <Link to="/reviews">оставить отзыв</Link>
              </div>
            </li>
            <li>
              <div className={styles.row__between}>
                <div className={styles.price}>{data.currentProduct.price}</div>
                <div className={styles.row}>
                  <div>Иконка сердце</div>
                  <p>в желания</p>
                </div>
              </div>
            </li>
            <li>
              <Button className={styles.btn__buy} onClick={() => console.log('Buy!')}>
                Купить
              </Button>
              <Button className={styles.btn__quickOrder} onClick={() => console.log('Quick Buy!')}>
                Быстрый заказ
              </Button>
            </li>
            <li>
              <div>
                <Button
                  className={buttons.deliveryActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickDelivery}
                >
                  Доставка
                </Button>
                <Button
                  className={buttons.paymentActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickPayment}
                >
                  Оплата
                </Button>
                <Button
                  className={buttons.warrantyActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                  onClick={handleClickWarranty}
                >
                  Гарантия
                </Button>
                {info.deliveryInfo && <DeliveryInfo />}
                {info.paymentInfo && <PaymentInfo />}
                {info.warrantyInfo && <WarrantyInfo />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
