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
import QuickOrder from '../QuickOrder/QuickOrder';

const AddToCartButton = ({ product, id, className, orderButton, currentPrice, modalHandler }) => {
  const [quickOrderOpen, setQuickOrderOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const dispatch = useDispatch();
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const cart = useSelector(getCartSelector);
  const localCart = useSelector(getLocalCartSelector);

  let idCartList = [];

  if (isAuth && !cartLoading && cart) {
    idCartList = cart.products.map(prod => {
      return prod.product['_id'];
    });
  } else if (!isAuth && localCart && localCart.products && localCart.products.length >= 1) {
    idCartList = localCart.products.map(prod => {
      return prod.product;
    });
  }

  const openCart = () => {
    dispatch(saveModalCartAction(true));
    modalHandler();
  };

  const addToCart = () => {
    if (localCart && localCart.products) {
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
      {orderButton && (
        <Button variant='order' title='Быстрый заказ' className={className} onClick={() => setQuickOrderOpen(true)} />
      )}

      {quickOrderOpen && (
        <QuickOrder product={product} quickOrderOpen={quickOrderOpen} setQuickOrderOpen={setQuickOrderOpen} />
      )}
    </>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  orderButton: PropTypes.bool,
  currentPrice: PropTypes.number.isRequired,
  modalHandler: PropTypes.func,
};

AddToCartButton.defaultProps = {
  className: '',
  orderButton: true,
  modalHandler: () => {
    return null;
  },
};

export default AddToCartButton;
