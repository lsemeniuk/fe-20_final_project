import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ProductCard from '../../ProductCard/ProductCard';
import styles from './CustomSlider.module.scss';

const CustomSlider = ({ title, products }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productsList = products.map(product => <ProductCard inSlider key={product.itemNo} product={product} />);

  return (
    <div>
      <h3 className={styles.bestsellerTitle}>{title}</h3>
      <ul>
        <Slider {...sliderSettings} className={styles.slider}>
          {productsList}
        </Slider>
      </ul>
    </div>
  );
};

CustomSlider.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomSlider;
