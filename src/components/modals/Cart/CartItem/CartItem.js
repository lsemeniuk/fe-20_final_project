import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { replace } from '../../../../utils/func';
import { PRODUCT_ROUTE } from '../../../../utils/consts';
import styles from './CartItem.module.scss';

const CartItem = ({ product, cartQuantity }) => {
  const [quantity, setQuantity] = useState(cartQuantity);

  const decrementQuantity = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  const incrementQuantity = () => {
    setQuantity(Math.min(quantity + 1, product.quantity));
  };

  const calculatePrice = () => {
    return replace(quantity * product.currentPrice);
  };

  return (
    <div className={styles.container}>
      <div className={styles.remove}>
        <span className={styles.removeBtn}>&#128465;</span>
      </div>
      <NavLink to={`${PRODUCT_ROUTE}/${product.itemNo}`}>
        <img src={product.imageUrls[0]} width={78} height={78} alt='product img' />
      </NavLink>
      <div className={styles.nameBlock}>
        <NavLink to={`${PRODUCT_ROUTE}/${product.itemNo}`}>
          <h4 className={styles.name}>{product.name}</h4>
        </NavLink>
        <span>{replace(product.currentPrice)} грн</span>
      </div>
      <div>
        <div className={styles.quantityBlock}>
          <button className={styles.quantityBtn} type='button' onClick={decrementQuantity}>
            -
          </button>
          <input
            onChange={e => setQuantity(e.target.value)}
            className={styles.quantityInput}
            type='text'
            value={quantity}
          />
          <button className={styles.quantityBtn} type='button' onClick={incrementQuantity}>
            +
          </button>
        </div>
        {quantity === product.quantity && <span className={styles.ended}>Извините:( Товара больше нет!</span>}
      </div>
      <div className={styles.price}>
        <span>{calculatePrice()} грн</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default CartItem;
