import React from 'react';
import PropTypes from 'prop-types';
import styles from './Сharacteristics.module.scss';

const Сharacteristics = ({ product }) => {
  const characteristicList = product.characteristics.map(c => {
    return (
      <li key={product.itemNo} className={styles.characteristicItem}>
        <div className={styles.characteristicName}>{c.name}</div>
        <div className={styles.characteristicValue}>
          {typeof c.value === 'object'
            ? c.value.map(v => {
                return <div className={styles.characteristicValueItem}>{v}</div>;
              })
            : c.value}
        </div>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <h3>
        Характеристики <span>{product.name}</span>
      </h3>
      <ul>{characteristicList}</ul>
    </div>
  );
};

Сharacteristics.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Сharacteristics;
