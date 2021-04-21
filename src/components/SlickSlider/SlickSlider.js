/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from './slider-data';
import Button from '../Button/Button';
import './SlickSlider.scss';

export default function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    className: 'slides',
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {sliderData.products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} className='img'></img>
            <p>{product.name}</p>
            <div>{product.price} грн</div>
            <div>
              <Button type='button' onClick={() => console.log('Added to Cart!')} className='add-to-cart'>
                В корзину
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
