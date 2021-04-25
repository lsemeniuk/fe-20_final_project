import React, { useEffect, useState } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';

const CustomSlider = () => {
  const [products, setProducts] = useState([]);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  useEffect(() => {
    axios.get('../../products.json').then(res => setProducts([...res.data]));
  }, []);
  return (
    <div>
      <Slider {...sliderSettings}>
        {products.map(i => (
          <ProductItem key={i.itemNo} product={i} />
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
