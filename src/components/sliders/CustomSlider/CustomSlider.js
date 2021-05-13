import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getProductsSelector, productsLoadingSelector } from '../../../store/products/selectors';
import Loader from '../../Loader/Loader';
import ProductCard from '../../ProductCard/ProductCard';
import style from './CustomSlider.module.scss';

const CustomSlider = () => {
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  if (productsLoading) {
    return <Loader />;
  }

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

  return (
    <ul>
      <Slider {...sliderSettings} className={style.slider}>
        {products.map(product => (
          <ProductCard inSlider key={product.itemNo} product={product} />
        ))}
      </Slider>
    </ul>
  );
};

export default CustomSlider;
