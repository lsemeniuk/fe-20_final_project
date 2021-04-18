import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { getProductsAction } from '../../store/products/actions';

const ProductList = props => {
  const { getProducts, products } = props;

  useEffect(() => {
    if (products.length === 0) getProducts();
  }, [getProducts]);

  const productList = products.map(product => <ProductItem key={product.itemNo} product={product} />);

  return <div>{productList}</div>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  getProducts: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  products: [],
};

const mapStoreToProps = store => ({
  products: store.products.data,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAction()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductList);
