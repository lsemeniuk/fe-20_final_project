import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './InlineProductCart.module.scss';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import AddToWishListBtn from '../AddToWishListButton/AddToWishListBtn';
import PriceBlock from '../PriceBlock/PriceBlock';
import ProductLabels from '../ProductLabels/ProductLabels';
import { PRODUCT_ROUTE } from '../../utils/consts';

// eslint-disable-next-line no-unused-vars
const InlineProductCart = ({ product, inSlider }) => {
  const {
    imageUrls,
    itemNo,
    previousPrice,
    currentPrice,
    name,
    superPrise,
    isNew,
    isHit,
    _id: id,
    characteristics,
  } = product;
  // const { imageUrls, name, currentPrice, _id: id, itemNo, previousPrice, characteristics } = product;
  // const calculateSales = Math.round(((previousPrice - currentPrice) / previousPrice) * 100);

  // eslint-disable-next-line array-callback-return,consistent-return
  const characteristicsBlock = characteristics.map((char, index) => {
    const { name: charName, value } = char;
    if (index <= 6 && typeof value === 'string' && value.length <= 20) {
      return (
        <div className={styles.characteristicsRow}>
          <p className={styles.characteristicsTitle}>{charName}</p>
          <p>{value}</p>
        </div>
      );
    }
  });

  return (
    <div className={styles.product}>
      <div>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
          <img className={styles.image} src={imageUrls[0].smallImage} alt='' />
        </NavLink>
      </div>
      <div className={styles.body}>
        <div className={styles.informationBlock}>
          <div>
            <ProductLabels
              isHit={isHit}
              isNew={isNew}
              currentPrice={currentPrice}
              superPrise={superPrise}
              previousPrice={previousPrice}
              inLine
            />
          </div>
          <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
            <p className={styles.name}>{name}</p>
          </NavLink>
          <div className={styles.characteristics}>{characteristicsBlock}</div>
        </div>
        <div className={styles.moreInfoBlock}>
          <div className={styles.priceBlock}>
            <p>Цена:</p>
            <PriceBlock currentPrice={currentPrice} previousPrice={previousPrice} />
          </div>
          <div className={styles.buttonBlock}>
            <AddToCartButton product={product} currentPrice={currentPrice} id={id} />
            <AddToWishListBtn id={id} itemNo={itemNo} />
          </div>
        </div>
      </div>
    </div>
  );
};

InlineProductCart.propTypes = {
  product: PropTypes.object.isRequired,
  inSlider: PropTypes.bool,
};

InlineProductCart.defaultProps = {
  inSlider: false,
};

export default InlineProductCart;
