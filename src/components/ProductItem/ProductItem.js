import React from 'react';
import style from './productItem.module.scss';

const product = {
  img: 'https://design109.horoshop.ua/content/images/25/240x240l85nn0/33197235775948.jpeg',
  name: 'Смарт-часы SAMSUNG Galaxy Watch Active 2 40mm Aluminium Pink Gold',
  currentPrice: '1200 грн',
  previousPrice: '1500 грн',
  isNew: true,
};

const ProductItem = () => {
  return (
    <div className={style.item}>
      <img src={product.img} alt='watch' />
      <div className={style.newMessage}>Новинка</div>
      {/* вставил здесь ссылку потому что eslint ругается */}
      <a href='https://horoshop.ua/ua/design/109/#desktop' title={product.name} className={style.name}>
        {product.name}
      </a>

      <div className={style.priceSection}>
        <p className={style.currentPrice}>{product.currentPrice}</p>
        <p className={style.previousPrice}>
          <s>{product.previousPrice}</s>
        </p>
      </div>

      <div className={style.btnSection}>
        {/* проставил type потому что eslint ругается */}
        <button type='submit' className={style.buyBtn}>
          Купить
        </button>
        <button type='submit' className={style.favBtn}>
          fav
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
