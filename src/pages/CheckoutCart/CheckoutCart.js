import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { getCustomerIsAuthSelector, getCustomerIsLoadingSelector } from '../../store/customer/selectors';
import CheckoutAuth from './CheckoutAuth/CheckoutAuth';
import CheckoutNoAuth from './CheckoutNoAuth/CheckoutNoAuth';
import OrderPreview from './OrderPreview/OrderPreview';
import Loader from '../../components/Loader/Loader';
import styles from './CheckoutCart.module.scss';

const CheckoutCart = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);

  if (customerLoading) {
    return <Loader />;
  }

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
