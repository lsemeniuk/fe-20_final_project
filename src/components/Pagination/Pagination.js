/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = ({ productsPerPage, setProductsPerPage, totalProducts, setCurrentPage, currentPage }) => {
  const pageNumbers = [];
  const maxProductsPerPage = 15;
  const minProductsPerPage = 3;

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleClickPrev = () => (currentPage > 1 ? setCurrentPage(currentPage - 1) : null);
  const handleClickNext = () =>
    currentPage < Math.ceil(totalProducts / productsPerPage) ? setCurrentPage(currentPage + 1) : null;

  const optionsArr = [];
  for (let i = minProductsPerPage; i <= maxProductsPerPage; i++) {
    optionsArr.push(i);
  }
  const options = optionsArr.map(op => (
    <option key={op} value={op}>
      {op}
    </option>
  ));
  return (
    <nav className={styles.center}>
      <ul className={styles.pagination}>
        <li className={styles.page__item} onClick={() => handleClickPrev()}>
          <span className={styles.page__prev}>пред</span>
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
          <span className={styles.page__next}>след</span>
        </li>
      </ul>
      <div className={styles.setQuantity}>
        <span>Показывать по:</span>
        <select
          onChange={e => setProductsPerPage(e.target.value)}
          defaultValue={productsPerPage}
          className={styles.select}
        >
          {options}
        </select>
      </div>
    </nav>
  );
};
Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setProductsPerPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
