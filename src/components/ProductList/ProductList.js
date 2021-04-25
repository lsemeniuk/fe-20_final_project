import React from 'react';

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

export default ProductList;
