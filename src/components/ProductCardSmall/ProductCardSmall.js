import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { replace } from '../../utils/func';
import { PRODUCT_ROUTE } from '../../utils/consts';
import styles from './ProductCardSmall.module.scss';

const ProductCardSmall = ({ product, onClick }) => {
  return (
    <div className={styles.container}>
      <NavLink data-testid='link' to={`${PRODUCT_ROUTE}/${product.productUrl}`} onClick={onClick}>
        <div className={styles.header}>
          <img src={product.imageUrls[0].smallImage} width={130} height={130} alt='product img' />
          <h5 className={styles.title}>{product.name}</h5>
        </div>
      </NavLink>
      <span className={styles.price}>{replace(product.currentPrice)} грн</span>
    </div>
  );
};

ProductCardSmall.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

ProductCardSmall.defaultProps = {
  onClick: e => {
    return e;
  },
};

export default ProductCardSmall;
