import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerPage.module.scss';

const ContainerPage = ({ children, style }) => {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
};

ContainerPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
};

ContainerPage.defaultProps = {
  style: {},
};

export default ContainerPage;
