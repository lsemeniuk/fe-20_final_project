import React, { useState } from 'react';
import Icons from '../Icons/Icons';
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
        <button type='button' className={styles.scrollTop} onClick={scrollToTop} title='Наверх'>
          <div className={styles.iconBox}>
            <Icons type='сhevron' color='#353535' filled width={40} height={40} />
          </div>
        </button>
      ) : (
        <button type='button' className={`${styles.scrollTop} ${styles.hidden}`} onClick={scrollToTop} title='Наверх'>
          <div className={styles.iconBox}>
            <Icons type='сhevron' color='#353535' filled width={40} height={40} />
          </div>
        </button>
      )}
    </div>
  );
};

export default ToTopButton;
