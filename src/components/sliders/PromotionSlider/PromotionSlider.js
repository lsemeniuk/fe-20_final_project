import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { getSlides } from '../../../http/slidesAPI';
import { PRODUCTS_ROUTE } from '../../../utils/consts';
import styles from './PromotionSlider.module.scss';

const PromotionSlider = () => {
  const [sliders, setSliders] = useState([]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots ${styles.dots}`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    getSlides().then(res => setSliders(res.data));
  }, []);

  const slidersList = sliders.map(s => {
    return (
      <div className={styles.itemContainer} key={s.customId}>
        <li style={{ background: s.backgroundColor }} className={styles.sliderItem}>
          <NavLink to={`${PRODUCTS_ROUTE}/all`} className={styles.link}>
            <img className={styles.sliderImage} alt={s.customId} src={s.imageUrl} />
          </NavLink>
        </li>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <ul>
        <Slider {...sliderSettings} className={styles.slider}>
          {slidersList}
        </Slider>
      </ul>
    </div>
  );
};

export default PromotionSlider;
