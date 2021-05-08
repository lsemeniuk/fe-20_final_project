import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsideContainer.module.scss';

const AsideContainer = ({ children, style }) => {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
};

AsideContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
};

AsideContainer.defaultProps = {
  style: {},
};

export default AsideContainer;
