import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Modal from '../Modal/Modal';
import { replace } from '../../utils/func';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ImageGalery.module.scss';

const ImageGalery = ({ product, buttonHandler, initialSlide }) => {
  const { _id: id, currentPrice } = product;

  const sliderSettings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidersList = product.imageUrls.map(s => {
    return (
      <li className={styles.galeryItem} key={s.largeImage}>
        <img className={styles.galeryImage} alt={s.largeImage} src={s.largeImage} />
      </li>
    );
  });

  return (
    <Modal buttonHandler={buttonHandler} modalWidth={window.innerWidth - 400}>
      <h2 className={styles.title}>
        Фотографии {product.name}, {product.color}
      </h2>

      <ul className={styles.galeryList}>
        <Slider {...sliderSettings} initialSlide={initialSlide} className={styles.slider}>
          {slidersList}
        </Slider>
      </ul>

      <div className={styles.orderContainer}>
        <AddToCartButton
          product={product}
          id={id}
          className={styles.button}
          currentPrice={currentPrice}
          modalHandler={buttonHandler}
        />
        <div className={styles.currentPrice}>{replace(currentPrice)} грн</div>
      </div>
    </Modal>
  );
};

ImageGalery.propTypes = {
  product: PropTypes.object.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  initialSlide: PropTypes.number.isRequired,
};

export default ImageGalery;
