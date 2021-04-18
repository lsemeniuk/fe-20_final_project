import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';
import { сontainer, breadCrumbs, categoryNameStyle, banner, bannerText, bannerImg } from './Home.style';
import './reset.css';

const Home = props => {
  const { categoryName } = props;

  return (
    <Container style={сontainer} className='d-flex flex-column justify-content-between'>
      <div className='row d-flex justify-content-between'>
        <p className='text-left col align-self-start' style={categoryNameStyle}>
          {categoryName}
        </p>
        <p className='text-right col align-self-end' style={breadCrumbs}>
          Главная &gt; Мужские
        </p>
      </div>
      <div>Здесь будет компонент фильтрации и сортировки от Дениса</div>
      <div style={banner}>
        <p style={bannerText}>Смарт часы для мужчин</p>
        <img
          style={bannerImg}
          src='https://i.pinimg.com/originals/8a/1b/30/8a1b30d7f7b5b843652ec2124cc01a9f.jpg'
          alt='Men'
        />
      </div>
      <ProductList />
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
