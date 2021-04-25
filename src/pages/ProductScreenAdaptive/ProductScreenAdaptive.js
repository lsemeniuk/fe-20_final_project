import React from 'react';
import { Link } from 'react-router-dom';
import style from './ProductScreenAdaptive.module.scss';
import data from './data';
import Container from '../../components/Container/Container';
// import { Link } from 'react-router-dom';
// import styles from './ProductScreenAdaptive.module.scss';
// import Button from '../../components/Button/Button';
// import Heart2 from '../../theme/icons/Heart2';
// import Container from '../../components/Container/Container';
// import SlickSlider from '../../components/SlickSlider/SlickSlider';
// import DeliveryInfo from './productscreen-components/DeliveryInfo';
// import PaymentInfo from './productscreen-components/PaymentInfo';
// import WarrantyInfo from './productscreen-components/WarrantyInfo';
// import Avatar from '../../theme/icons/Avatar';
// import FacebookIcon from '../../theme/icons/Facebook';
// import GoogleIcon from '../../theme/icons/Google';
// import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm';
// import ProductDetails from './productscreen-components/ProductDetails';

function ProductScreenAdaptive() {
  const { name, countInStock, itemNo } = data.currentProduct;
  return (
    <Container>
      <h2>This is Adaptive Product Screen</h2>
      <ul>
        <li className={style.product__info}>
          <span className={style.location}>Главная &#62; Мужские</span>
          <h3 className={style.name}>{name}</h3>
          <div className={`${style.row} ${style.row__start}`}>
            <div className={style.gap}>
              {countInStock > 0 ? (
                <span className={style.success}>В наличии</span>
              ) : (
                <span className={style.danger}>Отсутствует</span>
              )}
            </div>
            <p className={style.gap}>Артикул:{itemNo}</p>
            <Link to='/reviews' className={style.review}>
              Оставить отзыв
            </Link>
          </div>
        </li>
        <li>Picture brand</li>
        <li>Price buttons</li>
        <li>Description</li>
        <li>Reviews</li>
        <li>Доставка Оплата Гарантия</li>
        <li>Слайдер: смотрите также</li>
        <li>Слайдер: похожие товары</li>
        <li>Слайдер: просмотренные товары</li>
      </ul>
    </Container>
  );
}

export default ProductScreenAdaptive;
