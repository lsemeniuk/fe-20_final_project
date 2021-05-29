import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import {
  getProductsFilterSelector,
  getProductsSelector,
  productsLoadingSelector,
} from '../../store/products/selectors';
import style from './ProductList.module.scss';
import Loader from '../Loader/Loader';
import { getProductsFilterOperation } from '../../store/products/operations';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  const productFilters = useSelector(getProductsFilterSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  const params = useParams();

  useEffect(() => {
    if (params.categories === 'all') {
      const { categories, ...filters } = productFilters;
      dispatch(getProductsFilterOperation({ ...filters }));
    } else {
      dispatch(getProductsFilterOperation({ ...productFilters, categories: params.categories }));
    }
  }, [params]);

  if (productsLoading) {
    return <Loader />;
  }

  const productList = products.map(product => <ProductCard key={product.itemNo} product={product} />);

  return <ul className={style.productsList}>{productList}</ul>;
};

export default ProductList;
