import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import styles from './SliderCart.module.scss';

const SliderCart = ({ product }) => {
  const { imageUrls, itemNo, currentPrice, name } = product;

  return (
    <div className={styles.cart}>
      {console.log(product)}
      <div>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
          <img className={styles.image} src={imageUrls[0]} alt='watch' />
        </NavLink>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{currentPrice}</p>
        </div>
      </div>
    </div>
  );
};

SliderCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SliderCart;
