import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscFeedback } from 'react-icons/vsc';
import { FaChevronRight } from 'react-icons/fa';
import style from './ProductScreenAdaptive.module.scss';
import data from './data';
import Container from '../../components/Container/Container';
// import { Link } from 'react-router-dom';
// import style from './ProductScreenAdaptive.module.scss';
import Button from '../../components/Button/Button';
import Heart2 from '../../theme/icons/Heart2';
import ProductDetails from '../ProductScreen/productscreen-components/ProductDetails';

// import Container from '../../components/Container/Container';
// import SlickSlider from '../../components/SlickSlider/SlickSlider';
// import DeliveryInfo from './productscreen-components/DeliveryInfo';
// import PaymentInfo from './productscreen-components/PaymentInfo';
// import WarrantyInfo from './productscreen-components/WarrantyInfo';
// import Avatar from '../../theme/icons/Avatar';
// import FacebookIcon from '../../theme/icons/Facebook';
// import GoogleIcon from '../../theme/icons/Google';
// import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm';

const ProductScreenAdaptive = () => {
  const { name, image, itemNo, isNew, countInStock, price } = data.currentProduct;
  const [toggleDetails, setToggleDetails] = useState(false);
  const readMore = () => {
    setToggleDetails(!toggleDetails);
  };
  return (
    <Container>
      <h2>This is Adaptive Product Screen</h2>
      <ul className={style.phoneView__container}>
        <li className={style.product__info}>
          <span className={style.location}>Главная &#62; Мужские</span>
          <div className={style.name}>{name}</div>
          <div className={`${style.row} ${style.row__between}`}>
            <p className={style.gap}>Артикул: {itemNo}</p>
            <Link to='/reviews' className={style.review}>
              Оставить отзыв
            </Link>
          </div>
        </li>
        <li>
          <div className={style.img__box}>
            <div className={style.imgCenter}>
              <img className={style.large} src={image} alt={name} />
            </div>
            {isNew && <div className={style.newMessage}>Новинка</div>}
            <img
              className={style.brand__little}
              src='https://design109.horoshop.ua/content/images/39/180x109l75nn0/amazfit-44485423477251.jpg'
              width='60'
              height='36'
              alt='product-brand'
            />
          </div>
        </li>
        <li className={style.price_buttons}>
          <div className={style.price_buttons_block}>
            <div className={style.gap}>
              {countInStock > 0 ? (
                <span className={style.success}>В наличии</span>
              ) : (
                <span className={style.danger}>Отсутствует</span>
              )}
            </div>
            <span className={style.price}>{price} грн</span>
            <Button title='Купить' onClick={null} />
            <Button
              title='Быстрый заказ'
              // className={`${style.btn__quickOrder} ${style.btn__gap}`}
              variant='outline'
              onClick={() => console.log('Quick Buy!')}
            />
          </div>
          <div className={style.icon__frame}>
            <Heart2 />
            <p>в желания</p>
          </div>
        </li>
        <li>
          <section className={style.info__block__top}>
            <h3 className={style.section__title}> Описание</h3>
            <h3 className={style.section__title}>{name}</h3>
            <p>
              Xiaomi Amazfit Verge – умные часы, которые получили 11 спортивных режимов. С ними вам не придется
              доставать телефон, чтобы посмотреть уведомления, воспользоваться картой или принять телефонный звонок.
            </p>
            <div className={style.details}>
              <button className={style.read__more} onClick={readMore} type='button'>
                Читать далее
                <FaChevronRight />
              </button>
              <div className={toggleDetails ? `${style.details__more} ${style.active}` : style.details__more}>
                <h3 className={style.section__title}>Особенности:</h3>
                <ProductDetails />
                <div>
                  <img
                    src='https://i.citrus.ua/uploads/content/product-photos/lysyanaya/december/av1.jpg?_t=1548256954'
                    alt='product-demo'
                  />
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <h3 className={style.section__title}>Отзывы: </h3>
          <div className={style.icon__centre}>
            <VscFeedback size='5rem' color='grey' />
            <p>Добавьте первый отзыв</p>
          </div>
        </li>
        <li>Доставка Оплата Гарантия</li>
        <li>Слайдер: смотрите также</li>
        <li>Слайдер: похожие товары</li>
        <li>Слайдер: просмотренные товары</li>
      </ul>
    </Container>
  );
};

export default ProductScreenAdaptive;
