import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { getCustomerIsAuthSelector, getCustomerIsLoadingSelector } from '../../store/customer/selectors';
import CheckoutAuth from './CheckoutAuth/CheckoutAuth';
import CheckoutNoAuth from './CheckoutNoAuth/CheckoutNoAuth';
import OrderPreview from './OrderPreview/OrderPreview';
import Loader from '../../components/Loader/Loader';
import styles from './CheckoutCart.module.scss';
import { checkAuthOperation } from '../../store/customer/operations';

const CheckoutCart = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

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
