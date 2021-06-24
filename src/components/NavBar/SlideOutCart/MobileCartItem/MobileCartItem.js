import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MobileCartItem.module.scss';
import {
  addProductToCartOperation,
  changeLocalCartOperation,
  decreaseCartProductQuantityOperation,
  deleteProductFromCartOperation,
} from '../../../../store/cart/operations';
import { getCustomerIsAuthSelector } from '../../../../store/customer/selectors';
import Icons from '../../../Icons/Icons';

const MobileCartItem = ({ product, cartQuantity, cart }) => {
  const { imageUrls, name, quantity, currentPrice, _id: id } = product;
  const picture = imageUrls[0].smallImage;
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const dispatch = useDispatch();
  const [controlQuantity, setControlQuantity] = useState(cartQuantity);

  const decrementQuantity = () => {
    dispatch(changeLocalCartOperation(id, 'decrease'));

    if (isAuth) {
      dispatch(decreaseCartProductQuantityOperation(id));
    }
    setControlQuantity(cartQuantity - 1);
  };

  const incrementQuantity = () => {
    dispatch(changeLocalCartOperation(id, 'add'));

    if (isAuth) {
      dispatch(addProductToCartOperation(id));
    }
    setControlQuantity(cartQuantity + 1);
  };

  const deleteProduct = () => {
    dispatch(changeLocalCartOperation(id, 'delete'));

    if (isAuth) {
      dispatch(deleteProductFromCartOperation(id, cart));
    }
  };

  const decrementDisabled = controlQuantity <= 1;
  const incrementDisabled = controlQuantity >= quantity;

  return (
    <li className={styles.item}>
      <div>
        <img src={picture} alt='product pic' width='60px' height='60px' />
      </div>
      <div className={styles.item__info}>
        <p>{name}</p>
        <div className={styles.item__price}>{currentPrice} грн</div>
        <div className={styles.controls__block}>
          <div className={styles.quantityBlock}>
            <button
              disabled={decrementDisabled}
              className={styles.quantityBtn}
              type='button'
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              onChange={e => setControlQuantity(e.target.value)}
              className={styles.quantityInput}
              type='text'
              value={controlQuantity}
            />
            <button
              disabled={incrementDisabled}
              className={styles.quantityBtn}
              type='button'
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <div
            className={styles.delete__container}
            onClick={() => {
              deleteProduct();
            }}
          >
            <Icons type='trash' />
          </div>
        </div>
      </div>
    </li>
  );
};
MobileCartItem.propTypes = {
  product: PropTypes.object.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  cart: PropTypes.object,
};
MobileCartItem.defaultProps = {
  cart: [],
};
export default MobileCartItem;
