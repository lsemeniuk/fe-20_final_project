/* eslint-disable dot-notation */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { cartLoadingSelector, getCartSelector } from '../../store/cart/selectors';
import { saveModalCartAction } from '../../store/modal/actions';
import { addProductToCartOperation } from '../../store/cart/operations';

const AddToCartButton = ({ id }) => {
  const dispatch = useDispatch();
  const cartLoading = useSelector(cartLoadingSelector);
  const cart = useSelector(getCartSelector);
  let idCartList = [];
  if (!cartLoading) {
    if (cart) {
      idCartList = cart.products.map(prod => {
        return prod.product['_id'];
      });
    }
  }

  const openCart = () => {
    dispatch(saveModalCartAction(true));
  };

  const addToCart = () => {
    dispatch(addProductToCartOperation(id));
  };

  return (
    <div>
      {idCartList.includes(id) ? (
        <Button onClick={openCart} variant='outline' title='В корзине' />
      ) : (
        <Button onClick={addToCart} title='Купить' />
      )}
    </div>
  );
};

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCartButton;
