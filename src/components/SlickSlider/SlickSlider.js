import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import sliderData from './slider-data';

export default function SlickSlider({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: 'slides',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {content.map(product => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} className='img' />
          <p className='name'>{product.name}</p>
          <div className='name'>{product.price} грн</div>
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
