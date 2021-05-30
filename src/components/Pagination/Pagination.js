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
    }
    return null;
  };

  return (
    <nav className={styles.center}>
      <ul className={styles.pagination}>
        <li className={styles.page__item} onClick={() => handlePage(startPage - 1)}>
          <span className={styles.page__prev}>пред</span>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={startPage === number ? `${styles.page__item} ${styles.active}` : `${styles.page__item}`}
            onClick={() => handlePage(number)}
          >
            <span className={styles.page__number}>{number}</span>
          </li>
        ))}
        <li className={styles.page__item} onClick={() => handlePage(startPage + 1)}>
          <span className={styles.page__next}>след</span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
