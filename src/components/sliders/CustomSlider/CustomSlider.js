import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ProductCard from '../../ProductCard/ProductCard';
import Loader from '../../Loader/Loader';
import { getProductsFilterParams } from '../../../http/productAPI';
import styles from './CustomSlider.module.scss';

const sliderSettings = {
  dots: false,
  infinite: false,
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

const CustomSlider = ({ title, filter }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductLoading] = useState(true);

  useEffect(() => {
    getProductsFilterParams(filter).then(res => {
      setProducts(res.data.products);
      setProductLoading(false);
    });
  }, []);

  if (productsLoading) {
    return <Loader />;
  }

  const productsList = products.map(product => <ProductCard inSlider key={product.itemNo} product={product} />);
  console.log('🚀 ~ file: CustomSlider.js ~ line 56 ~ CustomSlider ~ productsList', productsList);

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
  filter: PropTypes.object.isRequired,
};

export default CustomSlider;
