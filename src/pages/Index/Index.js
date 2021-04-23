import React from 'react';
import { NavLink } from 'react-router-dom';
// import AboutShop from '../../components/AboutShop/AboutShop';
import style from './MainPage.module.scss';
import Container from '../../components/Container/Container';
import { PRODUCTS_ROUTE } from '../../utils/consts';

const Index = () => {
  return (
    <div>
      <div className={style.sloganWrapper}>
        <Container>
          <div className={style.slider}>
            <p>here will be slider later</p>
          </div>
          <NavLink to={PRODUCTS_ROUTE}>
            <div className={style.sloganSection}>
              <div className={style.imgWrapper}>
                <img
                  className={style.img}
                  src='https://res.cloudinary.com/vdsh/image/upload/v1619018183/watch_mainPage_kgsvfq.png'
                  alt=''
                />
              </div>
              <div className={style.sloganText}>
                <h1 className={style.slogan}>
                  Смарт время <br /> смарт-часы!
                </h1>
                <button type='button' className={style.sloganBuyBtn}>
                  Купить
                </button>
              </div>
            </div>
          </NavLink>
        </Container>
      </div>

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
              <p>Хиты продаж</p>
            </div>
          </div>

          <div className={style.forWho}>
            <NavLink className={style.forWhoLinks} to={PRODUCTS_ROUTE}>
              <div className={style.forMen}>
                <img
                  className={style.imgForMen}
                  src='https://res.cloudinary.com/vdsh/image/upload/v1619083373/forMan_aldinh.png'
                  alt=''
                />
                <p className={style.menText}>для него</p>
              </div>
            </NavLink>
            <NavLink className={style.forWhoLinks} to={PRODUCTS_ROUTE}>
              <div className={style.forWoman}>
                <img
                  className={style.imgForWoman}
                  src='https://res.cloudinary.com/vdsh/image/upload/v1619086322/forWoman_bpp0pc.png'
                  alt=''
                />
                <p className={style.womanText}>для неё</p>
              </div>
            </NavLink>
          </div>

          <div className={style.newProducts}>
            <p>New products</p>
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
