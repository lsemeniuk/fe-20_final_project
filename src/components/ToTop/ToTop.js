import React, { useState } from 'react';
import styles from './ToTop.module.scss';

const ToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <div>
      {showScroll && (
        <button type='button' className={styles.scrollTop} onClick={scrollToTop}>
          To Top
        </button>
      )}
    </div>
  );
};

export default ToTopButton;
