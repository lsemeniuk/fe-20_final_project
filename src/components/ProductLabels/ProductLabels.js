import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductLabels.module.scss';

const ProductLabels = ({ superPrise, isNew, isHit, previousPrice, currentPrice, inLine }) => {
  const calculateSales = Math.round(((previousPrice - currentPrice) / previousPrice) * 100);
  const labelBlock = inLine
    ? `${styles.labelBlock} ${styles.inLineLabelBlock}`
    : `${styles.labelBlock} ${styles.topLabelBlock}`;

  return (
    <div className={labelBlock}>
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
  );
};

ProductLabels.propTypes = {
  superPrise: PropTypes.string.isRequired,
  isNew: PropTypes.string.isRequired,
  isHit: PropTypes.string.isRequired,
  previousPrice: PropTypes.number,
  currentPrice: PropTypes.number.isRequired,
  inLine: PropTypes.bool,
};

ProductLabels.defaultProps = {
  inLine: false,
  previousPrice: null,
};

export default ProductLabels;
