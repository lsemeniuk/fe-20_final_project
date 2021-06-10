import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { replace } from '../../../../../utils/func';
import { PRODUCT_ROUTE } from '../../../../../utils/consts';
import styles from './ProductOrdersItem.module.scss';

const ProductOrdersItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <NavLink to={`${PRODUCT_ROUTE}/${product.product.itemNo}`}>
          <img src={product.product.imageUrls[0].smallImage} width={100} height={100} alt='productImage' />
        </NavLink>
      </div>
      <div>
        <NavLink to={`${PRODUCT_ROUTE}/${product.product.itemNo}`}>
          <div className={`${styles.bold} ${styles.productName}`}>
            {product.product.name}, {product.product.color}
          </div>
        </NavLink>
        <div className={styles.productPrice}>
          <div>
            Цена: <span className={styles.bold}>{replace(product.product.currentPrice)} грн.</span>
          </div>
          <div>
            Количество: <span className={styles.bold}>{product.cartQuantity} шт.</span>
          </div>
          <div>
            Сумма:{' '}
            <span className={styles.bold}>{replace(product.product.currentPrice * product.cartQuantity)} грн.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductOrdersItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductOrdersItem;
