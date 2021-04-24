import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderInModal.scss';
import sliderData from './slider-data';

export default function SliderInModal({ content }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    arrows: true,
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
SliderInModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array,
};
SliderInModal.defaultProps = {
  content: sliderData.products,
};
