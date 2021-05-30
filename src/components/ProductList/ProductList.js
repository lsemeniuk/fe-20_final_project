import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
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
  const history = useHistory();

  useEffect(() => {
    if (params.categories === 'all') {
      const { categories, ...filters } = productFilters;
      dispatch(getProductsFilterOperation({ history, ...filters }));
    } else {
      dispatch(getProductsFilterOperation({ history, ...productFilters, categories: params.categories }));
    }
  }, [history.location.pathname]);

  if (productsLoading) {
    return <Loader />;
  }

  const productList = products.map(product => <ProductCard key={product.itemNo} product={product} />);

  return <ul className={style.productsList}>{productList}</ul>;
};

export default ProductList;
