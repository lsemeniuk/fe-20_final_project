/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.center}>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.page__item} onClick={() => setCurrentPage(number)}>
            <span className={styles.page__number}>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default Pagination;
