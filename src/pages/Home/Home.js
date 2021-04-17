import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';

const Home = props => {
  const { categoryName } = props;

  return (
    <>
      {categoryName}
      <ProductList />
      <AboutShop />
    </>
  );
};

const mapStoreToProps = store => ({
  categoryName: store.home.categoryName,
});

Home.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default connect(mapStoreToProps)(Home);
