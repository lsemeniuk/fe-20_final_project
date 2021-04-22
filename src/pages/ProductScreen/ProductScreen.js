import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductScreen.module.scss';
import data from './data';
import Button from '../../components/Button/Button';
import DeliveryInfo from './DeliveryInfo';
import PaymentInfo from './PaymentInfo';
import WarrantyInfo from './WarrantyInfo';
import CartModal from '../../components/modals/CartModal';
import Heart2 from '../../theme/icons/Heart2';
import Container from '../../components/Container/Container';
import SlickSlider from '../../components/SlickSlider/SlickSlider';

const ProductScreen = () => {
  const { name, image, price, previousPrice, countInStock, itemNo, isNew } = data.currentProduct;
  const [buttons, setButtons] = useState({
    deliveryActive: true,
    paymentActive: false,
    warrantyActive: false,
  });
  const [info, setInfo] = useState({
    deliveryInfo: true,
    paymentInfo: false,
    warrantyInfo: false,
  });

  const handleClickDelivery = () => {
    setButtons({ deliveryActive: true, paymentActive: false, warrantyActive: false });
    setInfo({ deliveryInfo: true, paymentInfo: false, warrantyInfo: false });
  };
  const handleClickPayment = () => {
    setButtons({ deliveryActive: false, paymentActive: true, warrantyActive: false });
    setInfo({ deliveryInfo: false, paymentInfo: true, warrantyInfo: false });
  };
  const handleClickWarranty = () => {
    setButtons({ deliveryActive: false, paymentActive: false, warrantyActive: true });
    setInfo({ deliveryInfo: false, paymentInfo: false, warrantyInfo: true });
  };
  const [isOpen, setIsOpen] = useState(false);

  const addToCartHandler = () => {
    // dispatch(addToCartAction(productID))
    setIsOpen(true);
  };
  const sliderWatches = data.products.filter(watch => watch.name.split(' ')[0] === 'Смарт-часы');
  const otherWatches = data.products.filter(watch => watch.category === 'men');
  return (
    <Container>
      <CartModal isOpen={isOpen} hideModal={() => setIsOpen(false)} />
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
        </div>
        <div className={styles.col__two}>
          <ul>
            <li>
              <span className={styles.location}>Главная &#62; Мужские</span>
            </li>
            <li>
              <h3 className={styles.name}>{name}</h3>
            </li>
            <li>
              <div className={`${styles.row} ${styles.row__start}`}>
                <div className={styles.gap}>
                  {countInStock > 0 ? (
                    <span className={styles.success}>В наличии</span>
                  ) : (
                    <span className={styles.danger}>Отсутствует</span>
                  )}
                </div>
                <p className={styles.gap}>Артикул:{itemNo}</p>
                <Link className={styles.review} to='/reviews'>
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
                className={`${styles.btn__quickOrder} ${styles.btn__gap}`}
                onClick={() => console.log('Quick Buy!')}
              />
            </li>
            <li className={styles.info__block}>
              <Button
                title='Доставка'
                className={buttons.deliveryActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                onClick={handleClickDelivery}
              />
              <Button
                title='Оплата'
                className={buttons.paymentActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                onClick={handleClickPayment}
              />
              <Button
                title='Гарантия'
                className={buttons.warrantyActive ? `${styles.about} ${styles.active}` : `${styles.about}`}
                onClick={handleClickWarranty}
              />
              {info.deliveryInfo && <DeliveryInfo />}
              {info.paymentInfo && <PaymentInfo />}
              {info.warrantyInfo && <WarrantyInfo />}
              {info.deliveryInfo && (
                <Link to='/delivery' className={styles.delivery}>
                  Подробнее о доставке
                </Link>
              )}
            </li>
            <li className={styles.info__block}>
              <h3 className={styles.section__title}>Смотрите также</h3>
              <SlickSlider content={sliderWatches} />
            </li>
            <li className={styles.info__block}>
              <h3 className={styles.section__title}>Похожие товары</h3>
              <SlickSlider content={otherWatches} />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default ProductScreen;
