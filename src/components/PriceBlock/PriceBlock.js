import React from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../utils/func';
import styles from './PriceBlock.module.scss';

const PriceBlock = ({ previousPrice, currentPrice, inSlider }) => {
  let regularPrice = `${styles.regularPrice}`;
  let currentPriceStyle = `${styles.currentPrice}`;
  let previousPriceStyle = `${styles.previousPrice}`;

  if (inSlider) {
    regularPrice = `${styles.regularPrice} ${styles.regularPrice__slider}`;
    currentPriceStyle = `${styles.currentPrice} ${styles.currentPrice__slider}`;
    previousPriceStyle = `${styles.previousPrice} ${styles.previousPrice__slider}`;
  }

  return (
    <>
      {previousPrice ? (
        <div className={styles.priceSales}>
          <div className={currentPriceStyle}>{replace(currentPrice)} грн</div>
          <div className={previousPriceStyle}>{replace(previousPrice)} грн</div>
        </div>
      ) : (
        <div className={regularPrice}>{replace(currentPrice)} грн</div>
      )}
    </>
  );
};

PriceBlock.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number,
  inSlider: PropTypes.bool,
};
PriceBlock.defaultProps = {
  previousPrice: null,
  inSlider: false,
};

export default PriceBlock;
