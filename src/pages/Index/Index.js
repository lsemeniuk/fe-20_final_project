import React from 'react';
import Container from '../../components/Container/Container';
import BrandBar from '../../components/sliders/BrandBar/BrandBar';
import CustomSlider from '../../components/sliders/CustomSlider/CustomSlider';
import PromotionSlider from '../../components/sliders/PromotionSlider/PromotionSlider';
import styles from './Index.module.scss';

const Index = () => {
  return (
    <main className={styles.main}>
      <PromotionSlider />

      <Container>
        <div className={styles.brandBar}>
          <h3 className={styles.brandBarTitle}>Выбирай часы своего любимого бренда</h3>
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

        <CustomSlider title='Свежие новинки' filter={{ isNew: 'yes' }} />
        <CustomSlider title='Последние просмотренные товары' viwedProduct />

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
