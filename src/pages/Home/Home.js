import React from 'react';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';
import style from './Home.module.scss';
import Container from '../../components/Container/Container';

const Home = () => {
  const categoryName = 'Мужские';
  return (
    <Container>
      <div className={style.сontainer}>
        <div className={style.navpanel}>
          <p className={style.categoryNameStyle}>{categoryName}</p>
          <p className={style.breadCrumbs}>Главная &gt; Мужские</p>
        </div>
        <div className={style.banner}>
          <p className={style.bannerText}>Смарт часы для мужчин</p>
          <img
            className={style.bannerImg}
            src='https://i.pinimg.com/originals/8a/1b/30/8a1b30d7f7b5b843652ec2124cc01a9f.jpg'
            alt='Men'
          />
        </div>
        <div>Здесь будет компонент фильтрации и сортировки от Дениса</div>
        <ProductList />
        <AboutShop />
      </div>
    </Container>
  );
};

export default Home;
