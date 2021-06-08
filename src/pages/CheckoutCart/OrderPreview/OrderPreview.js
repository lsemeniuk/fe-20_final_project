import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../../../components/CartList/CartList';
import { cartTotalPriceSelector, deliveryMethodSelector } from '../../../store/cart/selectors';
import { replace } from '../../../utils/func';
import styles from './OrderPreview.module.scss';

const OrderPreview = () => {
  const totalPrice = useSelector(cartTotalPriceSelector);
  const deliveryMethod = useSelector(deliveryMethodSelector);

  let deliveryPrice = '';

  let paymentPrice = totalPrice;

  if (deliveryMethod === 'Самовывоз из магазина') {
    deliveryPrice = 'Бесплатно';
  } else if (deliveryMethod === 'Новой почтой') {
    deliveryPrice = 'Согласно тарифам "Нова пошта"';
  } else if (deliveryMethod === 'Курьером по Киеву') {
    deliveryPrice = '80 грн.';
    paymentPrice += 80;
  }

  return (
    <div className={`${styles.container} checkout__orders-preview`}>
      <div className={styles.previewContant}>
        <h3 className='checkout__title'>Ваш заказ</h3>
        <CartList containerClass={styles.cartItem} />
        <div className={styles.ordersBlock}>
          <div className={styles.itemTitle}>Доставка</div>
          <div>{deliveryPrice}</div>
        </div>
        <div className={`${styles.ordersBlock} ${styles.payment}`}>
          <div className={styles.itemTitle}>Сумма к оплате: </div>
          <div className={styles.paymentPrice}>{replace(paymentPrice)} грн.</div>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
