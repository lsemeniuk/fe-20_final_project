import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContainerAside.module.scss';

const ContainerAside = ({ children, style, aside }) => {
  return (
    <>
      {!aside && (
        <aside style={style} className={styles.container}>
          {children}
        </aside>
      )}
      {aside && (
        <aside style={style} className={styles.container__aside_user}>
          {children}
        </aside>
      )}
    </>
  );
};

ContainerAside.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  style: PropTypes.object,
  aside: PropTypes.bool,
};

ContainerAside.defaultProps = {
  style: {},
  aside: false,
};

export default ContainerAside;
