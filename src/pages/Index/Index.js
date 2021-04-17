import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';

const Index = props => {
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

Index.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default connect(mapStoreToProps)(Index);
