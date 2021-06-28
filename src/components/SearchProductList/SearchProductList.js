/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { searchProducts } from '../../http/productAPI';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import style from './SearchProductList.module.scss';
import { getQueryStringSelector } from '../../store/search/selectors';
import { saveSearchResultsAction } from '../../store/search/actions';

const SearchProductList = () => {
  const dispatch = useDispatch();
  const searchWords = useSelector(getQueryStringSelector);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchWords !== '') {
      const queryString = { query: searchWords };
      setResultsLoading(true);
      searchProducts(queryString)
        .then(res => {
          setResultsLoading(false);
          setSearchResults(res.data);
          dispatch(saveSearchResultsAction(res.data));
          console.log(res.data);
        })
        .catch(err => setError(err.message));
    }
    return null;
  }, [searchWords]);

  // if (resultsLoading) return <Loader />;

  const searchProductList = searchResults?.map(product => <ProductCard key={product.itemNo} product={product} />);
  return (
    <>
      {error.length && <p className={style.danger}>Произошла ошибка: {error}</p>}
      {resultsLoading ? (
        <Loader />
      ) : searchResults.length > 0 ? (
        <ul className={style.productsList}>{searchProductList}</ul>
      ) : (
        <p className={style.message}>Нет товаров удовлетворяющих поиску</p>
      )}
    </>
  );
};

export default SearchProductList;
