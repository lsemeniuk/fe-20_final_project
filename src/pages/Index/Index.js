/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
// import { PRODUCTS_ROUTE } from '../../utils/consts';
import Container from '../../components/Container/Container';
import GenderLink from '../../components/GenderLink/GenderLink';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import style from './MainPage.module.scss';
import PromotionSlider from '../../components/PromotionSlider/PromotionSlider';

const Index = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <PromotionSlider />

      <div className={style.productsSection}>
        <Container>
          <div className={style.descriptionWrapper}>
            <h2 className={style.descriptionText}>
              Большой выбор <br /> оригинальных <br /> смарт-часов
            </h2>
            <img
              className={style.descriptionImg}
              src='https://res.cloudinary.com/vdsh/image/upload/v1619028932/watchesBigChoise_k1qyja.png'
              alt=''
            />
          </div>

          <div className={style.bestsellersSection}>
            <div className={style.bestsellersItems}>
              <h3 className={style.bestsellerTitle}>Хиты продаж</h3>
              <CustomSlider />
            </div>
          </div>

          <div className={style.forWho}>
            <GenderLink
              img='https://res.cloudinary.com/vdsh/image/upload/v1619083373/forMan_aldinh.png'
              forWho='forMen'
              textContent='для него'
            />
            <GenderLink
              img='https://res.cloudinary.com/vdsh/image/upload/v1619086322/forWoman_bpp0pc.png'
              forWho='forWoman'
              textContent='для неё'
            />
          </div>

          <Slider className={style.genderSlider} {...sliderSettings}>
            <GenderLink
              img='https://res.cloudinary.com/vdsh/image/upload/v1619083373/forMan_aldinh.png'
              forWho='forMen'
              textContent='для него'
            />
            <GenderLink
              img='https://res.cloudinary.com/vdsh/image/upload/v1619086322/forWoman_bpp0pc.png'
              forWho='forWoman'
              textContent='для неё'
            />
          </Slider>

          <div className={style.newProducts}>
            <h3 className={style.newProductsTitle}>New products</h3>
            <CustomSlider />
          </div>

          <div className={style.aboutSection}>
            <h4 className={style.aboutTitle}>О магазине</h4>
            <p className={style.aboutText}>
              В интернет-магазине TIMESHOP каждый может выбрать и купить наручные часы, потратив совсем немного времени,
              - - удобный поиск со множеством фильтров в считаные минуты подберет модель Вашей мечты среди множества,
              представленного на сайте.
            </p>
            <p className={style.aboutText}>
              В каталоге часов интернет-магазина TIMESHOP более 190 брендов мужских и женских моделей разных ценовых
              категорий, всего более 50 000 товаров. Здесь Вы найдете самые популярные швейцарские часы, японские и
              немецкие, и даже французские и американские. Дорогие часы эксклюзивных марок выделены в отдельный раздел.
              Кроме того, у нас есть настенные, настольные и напольные часы, ювелирные изделия и подарки.
              АссортиментTIMESHOP пополняется постоянно!
            </p>
            <p className={style.aboutText}>
              Со многими производителями TIMESHOP сотрудничает напрямую, в остальных случаях мы выбираем официальных,
              проверенных поставщиков. Мы работаем уже более 19 лет и всегда гарантируем 100% подлинность товара.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Index;
