/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../../utils/func';
import styles from './ProductPrice.module.scss';
import AddToCartButton from '../../../components/AddToCartButton/AddToCartButton';
import Button from '../../../components/Button/Button';
import AddToWishListBtn from '../../../components/AddToWishListButton/AddToWishListBtn';

const ProductPrice = ({ product }) => {
  const { previousPrice, currentPrice, _id: id } = product;

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
      <AddToCartButton id={id} className={styles.button} />
      <Button variant='outline' className={`${styles.button} ${styles.orderButton}`} title='Быстрый заказ' />
      <AddToWishListBtn id={id} />
    </div>
  );
};

ProductPrice.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPrice;
