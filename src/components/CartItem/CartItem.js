import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { replace } from '../../utils/func';
import { PRODUCT_ROUTE } from '../../utils/consts';
import {
  addProductToCartOperation,
  changeLocalCartOperation,
  decreaseCartProductQuantityOperation,
  deleteProductFromCartOperation,
} from '../../store/cart/operations';
import { saveModalCartAction } from '../../store/modal/actions';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import styles from './CartItem.module.scss';

const CartItem = ({ product, cartQuantity, cart }) => {
  const { previousPrice, currentPrice, quantity, itemNo, name, imageUrls, _id: id } = product;
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

  const calculatePrice = () => {
    return replace(cartQuantity * currentPrice);
  };

  const closeCart = () => {
    dispatch(saveModalCartAction(false));
  };

  const decrementDisabled = controlQuantity <= 1;
  const incrementDisabled = controlQuantity >= quantity;

  return (
    <li className={styles.container}>
      <div className={styles.column}>
        <div className={styles.delete}>
          <span
            onClick={() => {
              deleteProduct();
            }}
            className={styles.deleteBtn}
          >
            &#128465;
          </span>
        </div>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`} onClick={closeCart}>
          <img src={imageUrls[0].smallImage} className={styles.image} width={78} height={78} alt='product img' />
        </NavLink>
        <div className={styles.nameBlock}>
          <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`} onClick={closeCart}>
            <h4 className={styles.name}>{name}</h4>
          </NavLink>
          {previousPrice ? (
            <div className={styles.priceSales}>
              <div className={styles.currentPrice}>{replace(currentPrice)} грн</div>
              <div className={styles.previousPrice}>{replace(previousPrice)} грн</div>
            </div>
          ) : (
            <div className={styles.regularPrice}>{replace(currentPrice)} грн</div>
          )}
        </div>
      </div>
      <div className={styles.column}>
        <div>
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
          {controlQuantity === quantity && <span className={styles.ended}>Извините:( Товара больше нет!</span>}
        </div>
        <div className={styles.price}>
          <span>{calculatePrice()} грн</span>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  cartQuantity: PropTypes.number.isRequired,
  cart: PropTypes.object,
};

CartItem.defaultProps = {
  cart: [],
};

export default CartItem;
