import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VscFeedback } from 'react-icons/vsc';
import { FaChevronRight } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import style from './ProductScreenAdaptive.module.scss';
import data from './data';
// import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import ProductDetails from './productscreen-components/ProductDetails';
import DelPayWarrBlock from './productscreen-components/DelPayWarrBlock';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import { addToFavoritesAction } from '../../store/favorites/actions';

const ProductScreenAdaptive = () => {
  const { currentProduct, products } = data;
  const { name, image, itemNo, isNew, countInStock, price, previousPrice } = currentProduct;

  const [toggleDetails, setToggleDetails] = useState(false);
  const dispatch = useDispatch();

  const addToFavorites = () => {
    dispatch(addToFavoritesAction(currentProduct));
  };

  const favorites = useSelector(state => state.favorites.data);

  const alreadyInFavs = favorites.find(item => item._id === currentProduct._id);

  const sliderWatches = products.filter(watch => watch.name.split(' ')[0] === 'Смарт-часы');

  return (
    <div>
      <ul className={style.page__container}>
        <li className={style.product__info__parent}>
          <span className={style.location}>Главная &#62; Мужские</span>
          <div className={style.name}>{name}</div>
          <div className={`${style.row} ${style.row__start}`}>
            <p className={style.gap}>Артикул: {itemNo}</p>
            <Link to='/reviews' className={style.review}>
              Оставить отзыв
            </Link>
          </div>
        </li>
        <li className={style.img__block}>
          <div className={style.img__box}>
            <img className={style.large} src={image} alt={name} />
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
        <li className={style.price__buttons}>
          <div className={style.price__buttons__block}>
            <div className={style.grey}>
              {countInStock > 0 ? (
                <span className={style.success}>В наличии</span>
              ) : (
                <span className={style.danger}>Отсутствует</span>
              )}
            </div>
            <span className={style.price}>{price} грн</span>{' '}
            <span className={style.price__old}>{previousPrice} грн</span>
            <div className={style.pc__view}>
              <Button title='Купить' onClick={null} />
              <Button title='Быстрый заказ' variant='outline' onClick={() => console.log('Quick Buy!')} />
              {!alreadyInFavs ? (
                <button type='button' className={style.icon__frame} onClick={() => addToFavorites(currentProduct)}>
                  <span className={style.heart}>
                    <AiOutlineHeart size='1.3rem' fill='lightgrey' />
                  </span>
                  <p className={style.gap}>В желания </p>
                </button>
              ) : (
                <button type='button' className={style.icon__frame}>
                  <span className={`${style.heart} ${style.heart__active}`}>
                    <AiFillHeart size='1.3rem' color='white' />
                  </span>
                  <p className={style.gap}>В желаниях</p>
                </button>
              )}
            </div>
          </div>
        </li>
        <li className={style.description}>
          <section className={style.info__block__top}>
            <h3 className={style.section__title}> Описание</h3>
            <h3 className={style.section__title}>{name}</h3>
            <p>
              Xiaomi Amazfit Verge – умные часы, которые получили 11 спортивных режимов. С ними вам не придется
              доставать телефон, чтобы посмотреть уведомления, воспользоваться картой или принять телефонный звонок.
            </p>
            <div className={style.details}>
              <button className={style.read__more} onClick={() => setToggleDetails(true)} type='button'>
                Читать полностью
                <FaChevronRight />
              </button>
              <div className={toggleDetails ? `${style.product__details} ${style.active}` : style.product__details}>
                <ProductDetails setToggleDetails={setToggleDetails} />
              </div>
            </div>
          </section>
        </li>
        <li className={style.reviews}>
          <h3 className={style.section__title}>Отзывы: </h3>
          <div className={style.icon__centre}>
            <VscFeedback size='5rem' color='grey' />
            <p>Добавьте первый отзыв</p>
            <div className={style.margin}>
              <Button title='Написать отзыв' onClick={null} />
            </div>
          </div>
        </li>
        <DelPayWarrBlock className={style.delivery} />
        <li className={style.slider1}>
          <h3 className={style.section__title}>Смотрите также</h3>
          <SlickSlider content={sliderWatches} />
        </li>
        <li className={style.slider2}>
          <h3 className={style.section__title}>Похожие товары</h3>
          <SlickSlider content={sliderWatches} />
        </li>
        <li className={style.slider3}>
          <h3 className={style.section__title}>Просмотренные товары</h3>
          <SlickSlider content={sliderWatches} />
        </li>
      </ul>
    </div>
  );
};

export default ProductScreenAdaptive;
