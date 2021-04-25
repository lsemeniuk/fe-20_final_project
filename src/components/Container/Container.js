import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={styles.cont}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Container;
