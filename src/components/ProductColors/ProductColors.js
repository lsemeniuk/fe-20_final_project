import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { colorsLoadingSelector, getColorsSelector } from '../../store/colors/selectors';
import { getProductByColor } from '../../http/productAPI';
import { PRODUCT_ROUTE } from '../../utils/consts';
import Loader from '../Loader/Loader';
import styles from './ProductColors.module.scss';

const ProductColors = ({ color, descForColor, isCard }) => {
  const colors = useSelector(getColorsSelector);
  const colorsLoading = useSelector(colorsLoadingSelector);

  const [productColors, setProductColors] = useState([]);
  const [productColorsLoading, setProductColorsLoading] = useState(true);

  useEffect(() => {
    getProductByColor({ descForColor }).then(res => {
      setProductColors(res.data);
      setProductColorsLoading(false);
    });
  }, [descForColor]);

  if (colorsLoading || productColorsLoading) {
    return <Loader />;
  }

  const colorList = productColors.map(product => {
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].name === product.color) {
        return (
          <li
            key={product.itemNo}
            className={color === product.color ? `${styles.item} ${styles.itemActive}` : styles.item}
          >
            <NavLink to={`${PRODUCT_ROUTE}/${product.productUrl}`}>
              <div style={{ borderColor: colors[i].cssValue }} className={styles.border}>
                <div style={{ backgroundColor: colors[i].cssValue }} className={styles.color}>
                  {}
                </div>
              </div>
            </NavLink>
          </li>
        );
      }
    }
    return null;
  });

  if (isCard) {
    return <ul className={styles.colors}>{colorList}</ul>;
  }

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
  descForColor: PropTypes.string,
  isCard: PropTypes.bool,
};

ProductColors.defaultProps = {
  descForColor: '',
  isCard: false,
};

export default ProductColors;
