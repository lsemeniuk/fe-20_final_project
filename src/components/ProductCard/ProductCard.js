/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import AddToWishListBtn from '../AddToWishListButton/AddToWishListBtn';
import PriceBlock from '../PriceBlock/PriceBlock';
import styles from './ProductCard.module.scss';
import ProductLabels from '../ProductLabels/ProductLabels';
import ProductColors from '../ProductColors/ProductColors';

const ProductCard = ({ product, inSlider }) => {
  const {
    imageUrls,
    itemNo,
    productUrl,
    previousPrice,
    currentPrice,
    name,
    superPrise,
    isNew,
    isHit,
    color,
    descForColor,
    _id: id,
  } = product;

  let containerClassName = `${styles.container}`;
  let btnBlockClassName = `${styles.btnBlock}`;
  let nameClassName = `${styles.name}`;

  if (inSlider) {
    containerClassName = `${styles.container} ${styles.container__slider}`;
    btnBlockClassName = `${styles.btnBlock} ${styles.btnBlock__inSlider}`;
    nameClassName = `${styles.name} ${styles.name__inSlider}`;
  }

  return (
    <li className={containerClassName}>
      <div>
        <NavLink to={`${PRODUCT_ROUTE}/${productUrl}`} className={styles.link}>
          <div className={styles.imgBlock}>
            <img className={`${styles.image} ${styles.firstImage}`} src={imageUrls[0].smallImage} alt='watch' />
            <img className={`${styles.image} ${styles.lastImage}`} src={imageUrls[1].smallImage} alt='watch' />
          </div>
        </NavLink>
      </div>
      <span className={styles.favIcon}>
        <AddToWishListBtn id={id} itemNo={itemNo} inSlider={inSlider} />
      </span>
      <ProductLabels
        previousPrice={previousPrice}
        currentPrice={currentPrice}
        isNew={isNew}
        isHit={isHit}
        superPrise={superPrise}
      />
      <div className={styles.priceBlock}>
        <PriceBlock previousPrice={previousPrice} currentPrice={currentPrice} inSlider={inSlider} />
      </div>

      <NavLink to={`${PRODUCT_ROUTE}/${productUrl}`} className={styles.nameLink}>
        <span className={nameClassName}>{name}</span>
      </NavLink>

      <div className={btnBlockClassName}>
        <div className={styles.btnFlex}>
          <AddToCartButton
            product={product}
            id={id}
            orderButton={false}
            currentPrice={currentPrice}
            inSlider={inSlider}
          />
          {!inSlider && <ProductColors descForColor={descForColor} color={color} isCard />}
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
