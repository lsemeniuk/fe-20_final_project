import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { replace } from '../../../../utils/func';
import Button from '../../../Button/Button';
import { PRODUCT_ROUTE } from '../../../../utils/consts';
import styles from './ProductCardSmall.module.scss';

const ProductCardSmall = ({ product }) => {
  return (
    <div className={styles.container}>
      <NavLink to={`${PRODUCT_ROUTE}/${product.itemNo}`}>
        <div className={styles.header}>
          <img src={product.imageUrls[0]} width={130} height={130} alt='product img' />
          <h5 className={styles.title}>{product.name}</h5>
        </div>
      </NavLink>
      <span className={styles.price}>{replace(product.currentPrice)} грн</span>
      <div className={styles.button}>
        <Button variant='special' title='В корзину' />
      </div>
    </div>
  );
};

ProductCardSmall.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardSmall;
