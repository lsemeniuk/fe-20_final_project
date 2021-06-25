import React, { useState } from 'react';
import styles from './Popup.module.scss';

// eslint-disable-next-line react/prop-types
const Popup = ({ active, children }) => {
  const [isActive, setIsActive] = useState(active);
  const activeClass = isActive ? styles.popupWrapperActive : styles.popupWrapper;

  setTimeout(() => {
    setIsActive(false);
  }, 3000);

  return (
    <div className={activeClass}>
      <div className={styles.popup}>{children}</div>
    </div>
  );
};

export default Popup;
