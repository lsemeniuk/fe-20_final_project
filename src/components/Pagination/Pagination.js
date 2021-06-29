/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = ({ perPage, startPage, productsQuantity, setPage }) => {
  const pageNumbers = [1];

  for (let i = 2; i <= Math.ceil(productsQuantity / perPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null;
  }

  if (pageNumbers.length < startPage) {
    setPage(1);
  }

  const handlePage = page => {
    if (page >= 1 && page <= pageNumbers.length) {
      setPage(page);
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
        data-testid='prev'
        className={startPage === 1 ? styles.arrow : `${styles.arrow} ${styles.arrowActive}`}
        onClick={() => handlePage(startPage - 1)}
      >
        <span className={styles.prev}>{}</span>
      </div>
      <ul className={styles.pagination}>{pageNumbersList}</ul>
      <div
        data-testid='next'
        className={startPage === pageNumbers.length ? styles.arrow : `${styles.arrow} ${styles.arrowActive}`}
        onClick={() => handlePage(startPage + 1)}
      >
        <span className={styles.next}>{}</span>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  startPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  productsQuantity: PropTypes.number,
};

Pagination.defaultProps = {
  productsQuantity: 0,
};

export default Pagination;
