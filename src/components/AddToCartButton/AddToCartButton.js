/* eslint-disable dot-notation */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { cartLoadingSelector, getCartSelector, getLocalCartSelector } from '../../store/cart/selectors';
import { saveModalCartAction } from '../../store/modal/actions';
import { addProductToCartOperation } from '../../store/cart/operations';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { cartTotalPriceAction, saveLocalCartAction } from '../../store/cart/actions';
import { calculateTotalPrice } from '../../utils/func';

const AddToCartButton = ({ id, className, orderButton, currentPrice }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const cart = useSelector(getCartSelector);
  const [isCart, setIsCart] = useState(false);
  const localCart = useSelector(getLocalCartSelector);

  let idCartList = [];
  if (isAuth && !cartLoading && cart) {
    idCartList = cart.products.map(prod => {
      return prod.product['_id'];
    });
  } else if (!isAuth && localCart && localCart.products.length >= 1) {
    idCartList = localCart.products.map(prod => {
      return prod.product;
    });
  }

  const openCart = () => {
    dispatch(saveModalCartAction(true));
  };

  const addToCart = () => {
    if (localCart) {
      const productCart = { products: [...localCart?.products, { cartQuantity: 1, product: id, currentPrice }] };
      localStorage.setItem('cart', JSON.stringify(productCart));

      const totalPrice = calculateTotalPrice(productCart, false);
      dispatch(cartTotalPriceAction(totalPrice));

      dispatch(saveLocalCartAction(productCart));
    } else {
      const productCart = { products: [{ cartQuantity: 1, product: id, currentPrice }] };
      localStorage.setItem('cart', JSON.stringify(productCart));

      const totalPrice = calculateTotalPrice(productCart, false);
      dispatch(cartTotalPriceAction(totalPrice));

      dispatch(saveLocalCartAction(productCart));
    }

    if (isAuth) {
      dispatch(addProductToCartOperation(id));
    }

    setIsCart(true);
  };

  return (
    <>
      {idCartList.includes(id) || isCart ? (
        <Button onClick={openCart} variant='outline' title='В корзине' className={className} />
      ) : (
        <Button onClick={addToCart} title='Купить' className={className} />
      )}
      {orderButton && <Button variant='order' title='Быстрый заказ' className={className} />}
    </>
  );
};

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  orderButton: PropTypes.bool,
  currentPrice: PropTypes.number.isRequired,
};

AddToCartButton.defaultProps = {
  className: '',
  orderButton: true,
};

export default AddToCartButton;
