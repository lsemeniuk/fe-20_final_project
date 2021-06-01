/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../../utils/func';
import AddToCartButton from '../../../components/AddToCartButton/AddToCartButton';
import AddToWishListBtn from '../../../components/AddToWishListButton/AddToWishListBtn';
import styles from './ProductPrice.module.scss';

const ProductPrice = ({ product }) => {
  const { previousPrice, currentPrice, _id: id, itemNo } = product;

  return (
    <div className={styles.container}>
      <div className={styles.price}>
        {previousPrice ? (
          <>
            <div className={styles.previousPrice}>{replace(previousPrice)} грн</div>
            <div className={styles.currentPrice}>{replace(currentPrice)} грн</div>
          </>
        ) : (
          <div className={styles.regularPrice}>{replace(currentPrice)} грн</div>
        )}
      </div>
      <AddToCartButton id={id} className={styles.button} currentPrice={currentPrice} />
      <AddToWishListBtn id={id} itemNo={itemNo} />
    </div>
  );
};

ProductPrice.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPrice;
