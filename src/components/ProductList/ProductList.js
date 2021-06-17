/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import {
  getProductsFilteredSelector,
  getProductsFilterSelector,
  productsLoadingSelector,
} from '../../store/products/selectors';
import style from './ProductList.module.scss';
import Loader from '../Loader/Loader';
import { getProductsFilterOperation } from '../../store/products/operations';

const ProductList = ({ searchResults }) => {
  const dispatch = useDispatch();
  const productsFiltered = useSelector(getProductsFilteredSelector);
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

  const productList = productsFiltered.map(product => <ProductCard key={product.itemNo} product={product} />);
  const searchProductList = searchResults?.map(product => <ProductCard key={product.itemNo} product={product} />);
  return (
    <>
      {' '}
      {productList.length && searchResults.length === 0 ? (
        <ul className={style.productsList}>{productList}</ul>
      ) : searchResults.length > 0 ? (
        <ul className={style.productsList}>{searchProductList}</ul>
      ) : (
        <p className={style.message}>Нет товаров удовлетворяющих поиску</p>
      )}
    </>
  );
};
ProductList.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object),
};

ProductList.defaultProps = {
  searchResults: [],
};
export default ProductList;
