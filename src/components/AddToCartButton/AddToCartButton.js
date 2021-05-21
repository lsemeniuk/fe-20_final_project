/* eslint-disable dot-notation */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { cartLoadingSelector, getCartSelector } from '../../store/cart/selectors';
import { saveModalCartAction } from '../../store/modal/actions';
import { addProductToCartOperation } from '../../store/cart/operations';

const AddToCartButton = ({ id, className }) => {
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
        <Button onClick={openCart} variant='outline' title='В корзине' className={className} />
      ) : (
        <Button onClick={addToCart} title='Купить' className={className} />
      )}
    </div>
  );
};

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

AddToCartButton.defaultProps = {
  className: '',
};

export default AddToCartButton;
