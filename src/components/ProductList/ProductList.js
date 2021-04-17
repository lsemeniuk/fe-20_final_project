import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = props => {
  const { products } = props;

  const productList = products.map(product => <ProductItem key={product.id} product={product} />);

  return <div>{productList}</div>;
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
