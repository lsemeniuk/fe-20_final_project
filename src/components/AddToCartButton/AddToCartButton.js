/* eslint-disable dot-notation */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { cartLoadingSelector, getCartSelector } from '../../store/cart/selectors';
import { saveModalCartAction } from '../../store/modal/actions';
import { addProductToCartOperation } from '../../store/cart/operations';

const AddToCartButton = ({ id, className, orderButton }) => {
  const dispatch = useDispatch();
  const cartLoading = useSelector(cartLoadingSelector);
  const cart = useSelector(getCartSelector);
  const [isCart, setIsCart] = useState(false);

  let idCartList = [];
  if (!cartLoading && cart) {
    idCartList = cart.products.map(prod => {
      return prod.product['_id'];
    });
  }

  const openCart = () => {
    dispatch(saveModalCartAction(true));
  };

  const addToCart = () => {
    dispatch(addProductToCartOperation(id));
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
};

AddToCartButton.defaultProps = {
  className: '',
  orderButton: true,
};

export default AddToCartButton;
