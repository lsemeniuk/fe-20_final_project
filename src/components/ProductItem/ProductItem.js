/* eslint-disable dot-notation */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import Icons from '../Icons/Icons';
import styles from './ProductItem.module.scss';
import { replace } from '../../utils/func';
import { addProductToWishlistOperation, deleteProductFromWishlishtOperation } from '../../store/wishList/operations';
import Button from '../Button/Button';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const { imageUrls, itemNo, previousPrice, currentPrice, name, superPrise, isNew, isHit } = product;
  const id = product['_id'];
  let idList = [];

  if (!wishListLoading) {
    if (wishList) {
      idList = wishList.products.map(prod => {
        return prod['_id'];
      });
    }
  }

  const addToWishList = () => {
    dispatch(addProductToWishlistOperation(id));
  };

  const deleteToWishList = () => {
    dispatch(deleteProductFromWishlishtOperation(id));
  };

  const calculateSales = Math.round(((previousPrice - currentPrice) / previousPrice) * 100);

  return (
    <li className={styles.container}>
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
          <Button title='Купить' />
          <span className={styles.favIcon}>
            {idList.includes(id) ? (
              <Icons onClick={() => deleteToWishList()} type='navHeart' color='#ffd200' filled width={30} height={30} />
            ) : (
              <Icons onClick={() => addToWishList()} type='navHeart' color='black' width={30} height={30} />
            )}
          </span>
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
