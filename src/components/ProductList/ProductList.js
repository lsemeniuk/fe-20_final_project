/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
// import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
// import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import style from './ProductList.module.scss';
import Loader from '../Loader/Loader';

// import { getProductsOperation } from '../../store/products/operations';

const ProductList = () => {
  // const dispatch = useDispatch();
  // const products = useSelector(getProductsSelector);
  // const productsLoading = useSelector(productsLoadingSelector);
  const [products, setProducts] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState('');
  const [productsLoading, setProductsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];

  useEffect(() => {
    setProductsLoading(true);
    if (category === 'all') {
      axios(
        `https://fe-20-final-project.herokuapp.com/api/products/filter?perPage=${productsPerPage}&startPage=${currentPage}`
      ).then(({ data }) => {
        setProducts(data.products);
        setProductsQuantity(data.productsQuantity);
        setProductsLoading(false);
      });
    } else {
      axios(
        `https://fe-20-final-project.herokuapp.com/api/products/filter?categories=${category}&perPage=${productsPerPage}&startPage=${currentPage}`
      ).then(({ data }) => {
        setProducts(data.products);
        setProductsQuantity(data.productsQuantity);
        setProductsLoading(false);
      });
    }
  }, [currentPage, productsPerPage, category]);

  if (productsLoading) {
    return <Loader />;
  }

  const productList = products.map(product => <ProductCard key={product.itemNo} product={product} />);

  return (
    <>
      <Pagination
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
        totalProducts={+productsQuantity}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {productsQuantity > 0 ? (
        <ul className={style.productsList}>{productList}</ul>
      ) : (
        <h1>Продуктов в категории {category} пока нет </h1>
      )}
    </>
  );
};

export default ProductList;
