import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './productItem.module.scss';
import Button from '../Button/Button';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { favIcon } from '../../theme/icons';

const ProductItem = ({ product }) => {
  const [inCart, setCart] = useState(false);
  const buyOpenModal = () => {
    setCart(true);
    // eslint-disable-next-line no-console
    console.log('buy');
  };
  const addToFav = e => {
    const heartIcon = e.target.classList;
    heartIcon.toggle(style.favIconActive);
  };
  const { imageUrls, isNew, name, currentPrice, previousPrice, itemNo } = product;
  return (
    <div className={style.item}>
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <img className={style.productImg} src={imageUrls[0]} alt='watch' />
      </NavLink>
      {isNew && <div className={style.newMessage}>Новинка</div>}
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <span className={style.name}>{name}</span>
      </NavLink>

      <div className={style.priceSection}>
        <p className={style.currentPrice}>{currentPrice}грн</p>
        <p className={style.previousPrice}>{previousPrice && <s>{previousPrice}грн</s>}</p>
      </div>

      <div className={style.btnSection}>
        {!inCart ? (
          <Button onClick={buyOpenModal} type='button' title='Купить' />
        ) : (
          <Button onClick={buyOpenModal} variant='outline' type='button' title='В корзине' />
        )}
        <span className={style.favIcon} onClick={addToFav}>
          {favIcon()}
        </span>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductItem;
