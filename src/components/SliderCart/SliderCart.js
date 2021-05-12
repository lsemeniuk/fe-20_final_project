/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import styles from './SliderCart.module.scss';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import AddToWishListBtn from '../AddToWishListButton/AddToWishListBtn';

const SliderCart = ({ product }) => {
  const { imageUrls, itemNo, currentPrice, name, previousPrice, _id: id } = product;

  return (
    <div>
      <div className={styles.cart}>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
          <img className={styles.image} src={imageUrls[0]} alt='watch' />
        </NavLink>
        <div className={styles.description}>
          <div className={styles.nameWrapper}>
            <NavLink className={styles.name} to={`${PRODUCT_ROUTE}/${itemNo}`}>
              {name}
            </NavLink>
          </div>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{currentPrice} грн</p>
            {previousPrice && <s className={styles.previousPrice}>{previousPrice} грн</s>}
          </div>
          <div className={styles.buttonSection}>
            <AddToCartButton id={id} />
            <span>
              <AddToWishListBtn id={id} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SliderCart;
