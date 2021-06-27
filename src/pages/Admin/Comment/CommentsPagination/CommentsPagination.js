/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentsPagination.module.scss';

const CommentsPagination = ({ perPage, startPage, setStartPage, commentsQuantity }) => {
  const pageNumbers = [1];

  for (let i = 2; i <= Math.ceil(commentsQuantity / perPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length < startPage) {
    setStartPage(1);
  }

  const handlePage = page => {
    if (page >= 1 && page <= pageNumbers.length) {
      setStartPage(page);
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

CommentsPagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  startPage: PropTypes.number.isRequired,
  setStartPage: PropTypes.func.isRequired,
  commentsQuantity: PropTypes.number,
};

CommentsPagination.defaultProps = {
  commentsQuantity: 0,
};

export default CommentsPagination;