import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';
import { сontainer, breadCrumbs, categoryNameStyle, banner, bannerText, bannerImg } from './Home.style';
import './reset.css';

const productCart = [
  {
    img: 'https://design109.horoshop.ua/content/images/34/240x240l85nn0/92761730995855.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '1000 грн',
    previousPrice: '1200 грн',
    isNew: false,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/33/240x240l85nn0/40233376444154.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '2000 грн',
    previousPrice: '1200 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/35/240x240l85nn0/48272048070578.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '4562 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/30/240x240l85nn0/62428467162146.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '68745 грн',
    previousPrice: '1200 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/29/240x240l85nn0/68354208744341.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '4563 грн',
    previousPrice: '785 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/34/240x240l85nn0/92761730995855.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '64454 грн',
    previousPrice: '854135 грн',
    isNew: false,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/24/240x240l85nn0/86840362163261.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Acusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '8554 грн',
    previousPrice: '9221 грн',
    isNew: true,
  },
  {
    img:
      'https://design109.horoshop.ua/content/images/17/240x240l85nn0/' +
      'smart-chasy-samsung-galaxy-watch-46mm-silver-sm-r800nzsasek-85420148595511.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '154512 грн',
    isNew: false,
  },
  {
    img:
      'https://design109.horoshop.ua/content/images/16/240x240l85nn0/' +
      'smart-chasy-apple-watch-series-4-40mm-gold-aluminium-with-pink-sand-sport-band-17802334110129.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '9865 грн',
    previousPrice: '5130 грн',
    isNew: true,
  },
];

const Home = props => {
  const { categoryName } = props;

  return (
    <Container style={сontainer} className="d-flex flex-column justify-content-between">
      <div className="row d-flex justify-content-between">
        <p className="text-left col align-self-start" style={categoryNameStyle}>
          {categoryName}
        </p>
        <p className="text-right col align-self-end" style={breadCrumbs}>
          Главная &gt; Мужские
        </p>
      </div>
      <div>Здесь будет компонент фильтрации и сортировки от Дениса</div>
      <div style={banner}>
        <p style={bannerText}>Смарт часы для мужчин</p>
        <img
          style={bannerImg}
          src="https://i.pinimg.com/originals/8a/1b/30/8a1b30d7f7b5b843652ec2124cc01a9f.jpg"
          alt="Men"
        />
      </div>
      <ProductList products={productCart} />
      <AboutShop />
    </Container>
  );
};

const mapStoreToProps = store => ({
  categoryName: store.home.categoryName,
});

Home.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default connect(mapStoreToProps)(Home);
