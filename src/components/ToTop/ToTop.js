import React, { useState } from 'react';
import Chevron from '../../theme/icons/Chevron';
import styles from './ToTop.module.scss';

const ToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <div>
      {showScroll ? (
        <button type='button' className={styles.scrollTop} onClick={scrollToTop}>
          <div>
            <Chevron />
          </div>
        </button>
      ) : (
        <button type='button' className={`${styles.scrollTop} ${styles.hidden}`} onClick={scrollToTop}>
          <div>
            <Chevron />
          </div>
        </button>
      )}
    </div>
  );
};

export default ToTopButton;
