import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.scss';

const PageContainer = ({ children, style }) => {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
};

PageContainer.defaultProps = {
  style: {},
};

export default PageContainer;
