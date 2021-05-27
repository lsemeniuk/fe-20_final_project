import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Modal from '../Modal/Modal';
import styles from './ImageGalery.module.scss';

const ImageGalery = ({ product, buttonHandler, display, initialSlide }) => {
  const sliderSettings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: `slick-dots ${styles.dots}`,
  };

  const slidersList = product.imageUrls.map(s => {
    return (
      <li className={styles.galeryItem}>
        <img className={styles.galeryImage} alt={s.largeImage} src={s.largeImage} />
      </li>
    );
  });

  return (
    <div className={styles.galeryContainer}>
      <Modal buttonHandler={buttonHandler} display={display} modalWidth={1200}>
        <ul className={styles.galeryList}>
          <Slider {...sliderSettings} initialSlide={initialSlide} className={styles.slider}>
            {slidersList}
          </Slider>
        </ul>
      </Modal>
    </div>
  );
};

ImageGalery.propTypes = {
  product: PropTypes.object.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  initialSlide: PropTypes.number.isRequired,
};

export default ImageGalery;
