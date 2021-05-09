import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import style from './ProductList.module.scss';
import Loader from '../Loader/Loader';
import { getProductsOperation } from '../../store/products/operations';
import { getWishListOperation } from '../../store/wishList/operations';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  useEffect(() => {
    dispatch(getProductsOperation());
    dispatch(getWishListOperation());
  }, []);

  if (productsLoading) {
    return <Loader />;
  }

  const productList = products.map(product => <ProductItem key={product.itemNo} product={product} />);

  return <ul className={style.productsList}>{productList}</ul>;
};

export default ProductList;
