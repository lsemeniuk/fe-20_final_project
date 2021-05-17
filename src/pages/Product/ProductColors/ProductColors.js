import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductColors.module.scss';
import { getColors } from '../../../http/colorsAPI';
import Loader from '../../../components/Loader/Loader';

const ProductColors = ({ color }) => {
  const [colors, setColors] = useState([]);
  const [colorsLoadind, setColorsLoadind] = useState(true);

  useEffect(() => {
    setColorsLoadind(true);
    getColors().then(res => {
      setColors(res.data);
      setColorsLoadind(false);
    });
  }, []);

  if (colorsLoadind) {
    return <Loader />;
  }
  console.log(colors);
  const colorList = colors.map(col => {
    if (col.name === color) {
      return (
        <li key={col.name} className={`${styles.item} ${styles.colorActive}`}>
          <div style={{ borderColor: col.cssValue }} className={styles.border}>
            <div style={{ backgroundColor: col.cssValue }} className={styles.color}>
              {}
            </div>
          </div>
        </li>
      );
    }
    if (col.name === 'Bronze') {
      return (
        <li style={{ borderColor: col.cssValue }} key={col.name} className={`${styles.item}`}>
          <div style={{ borderColor: col.cssValue }} className={styles.border}>
            <div style={{ backgroundColor: col.cssValue }} className={styles.color}>
              {}
            </div>
          </div>
        </li>
      );
    }
    return null;
  });

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Цвет корпуса: <span className={styles.textColor}>{color}</span>
      </div>
      <ul className={styles.colors}>{colorList}</ul>
    </div>
  );
};

ProductColors.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ProductColors;
