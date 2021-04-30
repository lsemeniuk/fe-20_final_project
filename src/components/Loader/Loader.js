/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const Loader = ({ fixed }) => {
  const fixedStyles = {
    position: 'absolute',
    top: '50vh',
    left: '50vw;',
    zIndex: '999',
  };

  const flexStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={fixed ? fixedStyles : flexStyles}>
      <svg className={styles.spinner} viewBox='0 0 50 50'>
        <circle className={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
      </svg>
    </div>
  );
};
Loader.propTypes = {
  fixed: PropTypes.bool,
};

Loader.defaultProps = {
  fixed: false,
};
export default Loader;
