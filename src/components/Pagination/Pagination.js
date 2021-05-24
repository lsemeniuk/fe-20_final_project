/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClickPrev = () => (currentPage > 1 ? setCurrentPage(currentPage - 1) : null);
  const handleClickNext = () =>
    currentPage < Math.ceil(totalProducts / productsPerPage) ? setCurrentPage(currentPage + 1) : null;

  return (
    <nav className={styles.center}>
      <ul className={styles.pagination}>
        <li className={styles.page__item} onClick={() => handleClickPrev()}>
          <span className={styles.page__prev}>prev</span>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={currentPage === number ? `${styles.page__item} ${styles.active}` : `${styles.page__item}`}
            onClick={() => setCurrentPage(number)}
          >
            <span className={styles.page__number}>{number}</span>
          </li>
        ))}
        <li className={styles.page__item} onClick={() => handleClickNext()}>
          <span className={styles.page__next}>next</span>
        </li>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
