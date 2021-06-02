import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import CheckoutAuth from './CheckoutAuth/CheckoutAuth';
import CheckoutNoAuth from './CheckoutNoAuth/CheckoutNoAuth';
import OrderPreview from './OrderPreview/OrderPreview';
import styles from './CheckoutCart.module.scss';

const CheckoutCart = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);

  return (
    <main>
      <Container>
        <p className={styles.pageTitle}>Oформление заказа</p>
        <div className={styles.pageContainer}>
          <div className={styles.ordersCantainer}>{isAuth ? <CheckoutAuth /> : <CheckoutNoAuth />}</div>
          <OrderPreview />
        </div>
      </Container>
    </main>
  );
};

export default CheckoutCart;
