import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { PRODUCT_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
import { favIcon } from '../../theme/icons';
import styles from './ProductItem.module.scss';
import { removeFromFavoritesAction } from '../../store/favorites/actions';

const ProductItem = ({ product }) => {
  const [inCart, setCart] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { image, isNew, name, price, previousPrice, itemNo, _id } = product;
  const buyOpenModal = () => {
    setCart(true);
    // eslint-disable-next-line no-console
    console.log('buy');
  };
  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesAction(_id));
    history.push(WISH_LIST_ROUTE);
  };
  const addToFav = e => {
    const heartIcon = e.target.classList;
    heartIcon.toggle(styles.favIconActive);
  };

  return (
    <div className={styles.item}>
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <img className={styles.productImg} src={image} alt='watch' />
        <span className={styles.cross} onClick={() => removeFromFavorites(_id)}>
          &times;
        </span>
      </NavLink>
      {isNew && <div className={styles.newMessage}>Новинка</div>}
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <span className={styles.name}>{name}</span>
      </NavLink>

      <div className={styles.priceSection}>
        <p className={styles.currentPrice}>{price}грн</p>
        <p className={styles.previousPrice}>{previousPrice && <s>{previousPrice}грн</s>}</p>
      </div>

      <div className={styles.btnSection}>
        {!inCart ? (
          <Button onClick={buyOpenModal} type='button' title='Купить' />
        ) : (
          <Button onClick={buyOpenModal} variant='outline' type='button' title='В корзине' />
        )}
        <span className={styles.favIcon} onClick={addToFav}>
          {favIcon()}
        </span>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default ProductItem;
