/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { replace } from '../../utils/func';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import AddToWishListBtn from '../AddToWishListButton/AddToWishListBtn';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, inSlider }) => {
  const { imageUrls, itemNo, previousPrice, currentPrice, name, superPrise, isNew, isHit, _id: id } = product;

  const calculateSales = Math.round(((previousPrice - currentPrice) / previousPrice) * 100);

  let containerClassName = `${styles.container}`;

  if (inSlider) {
    containerClassName = `${styles.container} ${styles.container__slider}`;
  }

  return (
    <li className={containerClassName}>
      <div>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`} className={styles.link}>
          <div className={styles.imgBlock}>
            <img className={`${styles.image} ${styles.firstImage}`} src={imageUrls[0]} alt='watch' />
            <img className={`${styles.image} ${styles.lastImage}`} src={imageUrls[1]} alt='watch' />
          </div>
        </NavLink>
      </div>
      <div className={styles.labelBlock}>
        {superPrise === 'yes' && (
          <div>
            <div className={`${styles.label} ${styles.labelSuperPrice}`}>Супер цена</div>
          </div>
        )}

        {isNew === 'yes' && (
          <div>
            <div className={`${styles.label} ${styles.labelNew}`}>Новинка</div>
          </div>
        )}
        {isHit === 'yes' && (
          <div>
            <div className={`${styles.label} ${styles.labelHit}`}>Хит</div>
          </div>
        )}
        {previousPrice && (
          <div>
            <div className={`${styles.label} ${styles.labelSales}`}>-{calculateSales}%</div>
          </div>
        )}
      </div>

      <div className={styles.priceBlock}>
        {previousPrice ? (
          <div className={styles.priceSales}>
            <div className={styles.currentPrice}>{replace(currentPrice)} грн</div>
            <div className={styles.previousPrice}>{replace(previousPrice)} грн</div>
          </div>
        ) : (
          <div className={styles.regularPrice}>{replace(currentPrice)} грн</div>
        )}
      </div>
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <span className={styles.name}>{name}</span>
      </NavLink>

      <div className={styles.btnBlock}>
        <div className={styles.btnFlex}>
          <AddToCartButton id={id} />
          <span className={styles.favIcon}>
            <AddToWishListBtn id={id} />
          </span>
        </div>
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  inSlider: PropTypes.bool,
};

ProductCard.defaultProps = {
  inSlider: false,
};

export default ProductCard;
