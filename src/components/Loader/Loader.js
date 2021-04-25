/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const Loader = ({ fixed }) => {
  const fixedStyles = {
    position: 'fixed',
    top: 'calc(50% - 40px)',
    left: 'calc(50% - 40px)',
    zIndex: '999',
  };

  const flexStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={fixed ? fixedStyles : flexStyles}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
