/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFilterSelector, getProductsQuantitySelector } from '../../store/products/selectors';
import { getProductsFilterOperation } from '../../store/products/operations';
import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { perPage, startPage, ...filter } = useSelector(getProductsFilterSelector);
  const productsQuantity = useSelector(getProductsQuantitySelector);
  const history = useHistory();

  const pageNumbers = [1];

  for (let i = 2; i <= Math.ceil(productsQuantity / perPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length < startPage) {
    dispatch(getProductsFilterOperation({ history, ...filter, perPage, startPage: 1 }));
  }

  const handlePage = page => {
    if (page >= 1 && page <= pageNumbers.length) {
      dispatch(getProductsFilterOperation({ history, ...filter, perPage, startPage: page }));
      window.scrollTo(0, 0);
    }
    return null;
  };

  const pageNumbersList = pageNumbers.map(number => (
    <li
      key={number}
      className={startPage === number ? `${styles.pageNumbersItem} ${styles.itemActive}` : styles.pageNumbersItem}
      onClick={() => handlePage(number)}
    >
      <span className={styles.pageNumbers}>{number}</span>
    </li>
  ));

  return (
    <nav className={styles.container}>
      <div
        className={startPage === 1 ? styles.arrow : `${styles.arrow} ${styles.arrowActive}`}
        onClick={() => handlePage(startPage - 1)}
      >
        <span className={styles.prev}>{}</span>
      </div>
      <ul className={styles.pagination}>{pageNumbersList}</ul>
      <div
        className={startPage === pageNumbers.length ? styles.arrow : `${styles.arrow} ${styles.arrowActive}`}
        onClick={() => handlePage(startPage + 1)}
      >
        <span className={styles.next}>{}</span>
      </div>
    </nav>
  );
};

export default Pagination;
