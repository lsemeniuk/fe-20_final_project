import React from 'react';
import style from './productItem.module.scss';
import Button from '../Button/Button';

const product = {
  img: ['https://design109.horoshop.ua/content/images/25/240x240l85nn0/33197235775948.jpeg'],
  name: 'Смарт-часы SAMSUNG Galaxy Watch Active 2 40mm Aluminium Pink Gold',
  currentPrice: '1200 грн',
  previousPrice: '1500 грн',
  isNew: true,
};

const ProductItem = () => {
  const { img, isNew, name, currentPrice, previousPrice } = product;
  return (
    <div className={style.item}>
      <img src={img[0]} alt="watch" />
      {isNew && <div className={style.newMessage}>Новинка</div>}
      {/* вставил здесь ссылку потому что eslint ругается */}
      <a href="https://horoshop.ua/ua/design/109/#desktop" title={name} className={style.name}>
        {name}
      </a>

      <div className={style.priceSection}>
        <p className={style.currentPrice}>{currentPrice}</p>
        <p className={style.previousPrice}>
          <s>{previousPrice}</s>
        </p>
      </div>

      <div className={style.btnSection}>
        <Button type="button" variant="special" title="Купить" />
        <Button type="button" variant="special" title="fav" />
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
