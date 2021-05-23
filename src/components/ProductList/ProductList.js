import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import Loader from '../Loader/Loader';
import { getProductsOperation } from '../../store/products/operations';
import style from './ProductList.module.scss';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  useEffect(() => {
    dispatch(getProductsOperation());
  }, []);

  if (productsLoading) {
    return <Loader />;
  }

  const productList = products.map(product => <ProductCard key={product.itemNo} product={product} />);

  return <ul className={style.productsList}>{productList}</ul>;
};

export default ProductList;
