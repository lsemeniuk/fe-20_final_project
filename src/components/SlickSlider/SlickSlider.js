/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlider.scss';
import sliderData from './slider-data';

function SampleNextArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
function SamplePrevArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default function SlickSlider({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          <p className='name'>{product.name}</p>
          <div className='name'>{product.price} грн</div>
        </div>
      ))}
    </Slider>
  );
}
SlickSlider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
};
SlickSlider.defaultProps = {
  content: sliderData.products,
};
