/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductList.module.scss';
import Loader from '../Loader/Loader';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState('');
  const [productsLoading, setProductsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];
  console.log(category);

  useEffect(() => {
    setProductsLoading(true);
    if (category === 'all' || category === undefined) {
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
      {productsQuantity > 0 ? (
        <div>
          <Pagination
            productsPerPage={productsPerPage}
            setProductsPerPage={setProductsPerPage}
            totalProducts={+productsQuantity}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <ul className={style.productsList}>{productList}</ul>
        </div>
      ) : (
        <h1 className={style.productAbsent}>Продуктов в категории {category} пока нет</h1>
      )}
    </>
  );
};

export default ProductList;
