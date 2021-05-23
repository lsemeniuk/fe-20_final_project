import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerAside.module.scss';

const ContainerAside = ({ children, style }) => {
  return (
    <aside style={style} className={styles.container}>
      {children}
    </aside>
  );
};

ContainerAside.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
};

ContainerAside.defaultProps = {
  style: {},
};

export default ContainerAside;
