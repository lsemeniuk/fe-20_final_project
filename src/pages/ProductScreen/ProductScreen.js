import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductScreen.module.scss';
import data from './data';
import Button from '../../components/Button/Button';
import Heart2 from '../../theme/icons/Heart2';
import Container from '../../components/Container/Container';
import SlickSlider from '../../components/SlickSlider/SlickSlider';
import ReviewForm from '../../components/Forms/ReviewForm/ReviewForm';

const ProductScreen = () => {
  const { name, image, price, previousPrice, countInStock, itemNo, isNew } = data.currentProduct;

  const addToCartHandler = () => {
    // setShowModal(true);
    // dispatch(addToCartAction(productID))
    // history.push(`${CART_ROUTE}/${productID}`);
    console.log('Added to Cart!');
  };
  const sliderWatches = data.products.filter(watch => watch.name.split(' ')[0] === 'Смарт-часы');
  const otherWatches = data.products.filter(watch => watch.category === 'men');
  return (
    <Container>
      <div className={`${styles.row} ${styles.row__top}`}>
        <div className={styles.col__one}>
          <div className={styles.img__box}>
            <img className={styles.large} src={image} alt={name} />
            {isNew && <div className={styles.newMessage}>Новинка</div>}
            <img
              className={styles.brand__little}
              src='https://design109.horoshop.ua/content/images/39/180x109l75nn0/amazfit-44485423477251.jpg'
              width='60'
              height='36'
              alt='product-brand'
            />
          </div>
          <div className={styles.info__block__top}>
            <h3 className={styles.section__title}>Новый отзыв или комментарий</h3>
            <div className={styles.review__group}>
              <ReviewForm />
              <div className={styles.entryWith__group}>
                <p className={styles.entryWith__group__text}>Войти с помощью</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col__two}>
          <ul>
            <li className={styles.product__info__block}>
              <span className={styles.location}>Главная &#62; Мужские</span>
              <h3 className={styles.name}>{name}</h3>
              <div className={`${styles.row} ${styles.row__start}`}>
                <div className={styles.gap}>
                  {countInStock > 0 ? (
                    <span className={styles.success}>В наличии</span>
                  ) : (
                    <span className={styles.danger}>Отсутствует</span>
                  )}
                </div>
                <p className={styles.gap}>Артикул: {itemNo}</p>
                <Link to='/reviews' className={styles.review}>
                  Оставить отзыв
                </Link>
              </div>
            </li>
            <li>
              <div className={`${styles.row} ${styles.row__between}`}>
                <div>
                  <span className={styles.price}>{price} грн</span>
                  {data.currentProduct.previousPrice && <span className={styles.oldPrice}>{previousPrice} грн</span>}
                </div>
                <div className={`${styles.row} ${styles.row__center}`}>
                  <div className={styles.icon__frame}>
                    <Heart2 />
                  </div>
                  <p>в желания</p>
                </div>
              </div>
            </li>
            <li className={styles.btns__block}>
              <Button title='Купить' onClick={addToCartHandler} />
              <Button
                title='Быстрый заказ'
                // className={`${styles.btn__quickOrder} ${styles.btn__gap}`}
                variant='outline'
                onClick={() => console.log('Quick Buy!')}
              />
            </li>
            <li className={styles.info__block}>
              <h3 className={styles.section__title}>Смотрите также</h3>
              <SlickSlider content={sliderWatches} />
            </li>
            <li>
              <h3 className={styles.section__title}>Похожие товары</h3>
              <SlickSlider content={otherWatches} />
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.info__block__top}>
        <h3 className={styles.section__title}> Описание</h3>
        <h3 className={styles.section__title}>{name}</h3>
        <p>
          Xiaomi Amazfit Verge – умные часы, которые получили 11 спортивных режимов. С ними вам не придется доставать
          телефон, чтобы посмотреть уведомления, воспользоваться картой или принять телефонный звонок.
        </p>
        <h3 className={styles.section__title}>Особенности:</h3>
        <div>
          <img
            src='https://i.citrus.ua/uploads/content/product-photos/lysyanaya/december/av1.jpg?_t=1548256954'
            alt='product-demo'
          />
        </div>
      </section>
    </Container>
  );
};

export default ProductScreen;
