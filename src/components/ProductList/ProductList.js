import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import { getProductsAction } from '../../store/products/actions';
import style from './ProductList.module.scss';

const ProductList = props => {
  const { getProducts, products } = props;

  useEffect(() => {
    if (products.length === 0) getProducts();
  }, [getProducts]);

  const productList = products.map(product => <ProductItem key={product.itemNo} product={product} />);

  return <div className={style.productsContainer}>{productList}</div>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStoreToProps = store => ({
  products: store.products.data,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAction()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductList);
