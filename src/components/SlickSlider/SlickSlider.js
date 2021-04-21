/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button/Button';
import './SlickSlider.scss';
import sliderData from './slider-data';

function SampleNextArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style, display: 'block', width: 40, height: 40 }} onClick={onClick} />;
}
function SamplePrevArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style, display: 'block', width: 40, height: 40 }} onClick={onClick} />;
}
export default function SlickSlider({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slides',
  };

  return (
    <Slider {...settings}>
      {content.map(product => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} className='img' />
          <p>{product.name}</p>
          <div>{product.price} грн</div>
          <div>
            <Button title='В Корзину' onClick={() => console.log('Added to Cart!')} variant='special' />
          </div>
        </div>
      ))}
    </Slider>
  );
}
SlickSlider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array,
};
SlickSlider.defaultProps = {
  content: sliderData.products,
};
