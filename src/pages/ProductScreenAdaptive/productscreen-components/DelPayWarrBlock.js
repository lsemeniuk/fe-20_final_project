import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../ProductScreen/ProductScreen.module.scss';
import Button from '../../../components/Button/Button';
import DeliveryInfo from './DeliveryInfo';
import PaymentInfo from './PaymentInfo';
import WarrantyInfo from './WarrantyInfo';

function DelPayWarrBlock() {
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
    <li>
      <div className={styles.btns__center}>
        <Button
          title='Доставка'
          className={buttons.deliveryActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
          onClick={handleClickDelivery}
        />
        <Button
          title='Оплата'
          className={buttons.paymentActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
          onClick={handleClickPayment}
        />
        <Button
          title='Гарантия'
          className={buttons.warrantyActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
          onClick={handleClickWarranty}
        />
      </div>
      {info.deliveryInfo && <DeliveryInfo />}
      {info.paymentInfo && <PaymentInfo />}
      {info.warrantyInfo && <WarrantyInfo />}
      {info.deliveryInfo && (
        <Link to='/delivery' className={styles.delivery}>
          Подробнее о доставке
        </Link>
      )}
    </li>
  );
}

export default DelPayWarrBlock;
