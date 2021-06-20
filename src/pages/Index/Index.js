import React, { useState } from 'react';
import Slider from 'react-slick';
import Container from '../../components/Container/Container';
import GenderLink from '../../components/GenderLink/GenderLink';
import Icons from '../../components/Icons/Icons';
import BrandBar from '../../components/sliders/BrandBar/BrandBar';
import CustomSlider from '../../components/sliders/CustomSlider/CustomSlider';
import PromotionSlider from '../../components/sliders/PromotionSlider/PromotionSlider';
import styles from './Index.module.scss';
import SlideUpNav from '../../components/SlideUpNav/SlideUpNav';

const Index = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [isOpen, setisOpen] = useState(false);
  const toggleCatalogNav = () => setisOpen(!isOpen);
  return (
    <main className={styles.main}>
      <div className={styles.catalog__bar} onClick={toggleCatalogNav}>
        <div>
          <Icons type='widget' filled />
        </div>
        <p className={styles.text}>Каталог товаров</p>
      </div>
      <SlideUpNav toggleCatalogNav={toggleCatalogNav} isOpen={isOpen} />
      <PromotionSlider />

      <Container>
        <div className={styles.brandBar}>
          <h3 className={styles.brandBarTytle}>Выбирай часы своего любимого бренда</h3>
          <BrandBar />
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.descriptionText}>
            Большой выбор <br /> оригинальных <br /> смарт-часов
          </h2>
          <img
            className={styles.descriptionImg}
            src='https://res.cloudinary.com/vdsh/image/upload/v1619028932/watchesBigChoise_k1qyja.png'
            alt=''
          />
        </div>

        <div className={styles.bestsellersSection}>
          <div className={styles.bestsellersItems}>
            <CustomSlider title='Хиты продаж' filter={{ isHit: 'yes' }} />
          </div>
        </div>

        <div className={styles.forWho}>
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

        <Slider className={styles.genderSlider} {...sliderSettings}>
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

        <CustomSlider title='Свежие новинки' filter={{ isNew: 'yes' }} />

        <div className={styles.aboutSection}>
          <h4 className={styles.aboutTitle}>О магазине</h4>
          <p className={styles.aboutText}>
            В интернет-магазине TIMESHOP каждый может выбрать и купить наручные часы, потратив совсем немного времени, -
            - удобный поиск со множеством фильтров в считаные минуты подберет модель Вашей мечты среди множества,
            представленного на сайте.
          </p>
          <p className={styles.aboutText}>
            В каталоге часов интернет-магазина TIMESHOP более 190 брендов мужских и женских моделей разных ценовых
            категорий, всего более 50 000 товаров. Здесь Вы найдете самые популярные швейцарские часы, японские и
            немецкие, и даже французские и американские. Дорогие часы эксклюзивных марок выделены в отдельный раздел.
            Кроме того, у нас есть настенные, настольные и напольные часы, ювелирные изделия и подарки.
            АссортиментTIMESHOP пополняется постоянно!
          </p>
          <p className={styles.aboutText}>
            Со многими производителями TIMESHOP сотрудничает напрямую, в остальных случаях мы выбираем официальных,
            проверенных поставщиков. Мы работаем уже более 19 лет и всегда гарантируем 100% подлинность товара.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Index;
