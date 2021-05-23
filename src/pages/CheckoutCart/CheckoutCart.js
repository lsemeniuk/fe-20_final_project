import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import CheckoutAuth from './CheckoutAuth/CheckoutAuth';
import CheckoutNoAuth from './CheckoutNoAuth/CheckoutNoAuth';

const CheckoutCart = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);

  return (
    <main>
      <Container>{isAuth ? <CheckoutAuth /> : <CheckoutNoAuth />}</Container>
    </main>
  );
};

export default CheckoutCart;
