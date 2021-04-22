import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './productItem.module.scss';
import Button from '../Button/Button';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { favIcon } from '../../theme/icons';

const product = {
  img: ['https://design109.horoshop.ua/content/images/25/240x240l85nn0/33197235775948.jpeg'],
  name: 'Смарт-часы SAMSUNG Galaxy Watch Active 2 40mm Aluminium Pink Gold',
  currentPrice: '1200 грн',
  previousPrice: '1500 грн',
  isNew: true,
  itemNo: 123512,
};

const ProductItem = () => {
  const [inCart, setCart] = useState(false);
  const buyOpenModal = () => {
    setCart(true);
    console.log('buy');
  };
  const addToFav = e => {
    const heartIcon = e.target.classList;
    heartIcon.toggle(style.favIconActive);
  };
  const { img, isNew, name, currentPrice, previousPrice, itemNo } = product;
  return (
    <div className={style.item}>
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <img src={img[0]} alt='watch' />
      </NavLink>
      {isNew && <div className={style.newMessage}>Новинка</div>}
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <span className={style.name}>{name}</span>
      </NavLink>

      <div className={style.priceSection}>
        <p className={style.currentPrice}>{currentPrice}</p>
        <p className={style.previousPrice}>
          <s>{previousPrice}</s>
        </p>
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

ProductItem.defaultProps = {
  name: 'Товар не найден',
  isNew: false,
};
// ProductItem.propTypes = {
//   name: PropTypes.string,
//   img: PropTypes.array,
//   currentPrice: PropTypes.string,
//   previousPrice: PropTypes.string,
//   isNew: PropTypes.bool,
// };
export default ProductItem;
