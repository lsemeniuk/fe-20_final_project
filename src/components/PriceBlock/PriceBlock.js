import React from 'react';
import PropTypes from 'prop-types';
import { replace } from '../../utils/func';
import styles from './PriceBlock.module.scss';

const PriceBlock = ({ previousPrice, currentPrice }) => {
  return (
    <>
      {previousPrice ? (
        <div className={styles.priceSales}>
          <div data-testid='newPrice' className={styles.currentPrice}>
            {replace(currentPrice)} грн
          </div>
          <div data-testid='prevPrice' className={styles.previousPrice}>
            {replace(previousPrice)} грн
          </div>
        </div>
      ) : (
        <div className={styles.regularPrice}>{replace(currentPrice)} грн</div>
      )}
    </>
  );
};

PriceBlock.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number,
};
PriceBlock.defaultProps = {
  previousPrice: null,
};

export default PriceBlock;
