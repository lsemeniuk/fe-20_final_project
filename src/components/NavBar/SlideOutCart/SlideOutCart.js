/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlideOutCart.module.scss';
import Icons from '../../Icons/Icons';

const SlideOutCart = ({ isCartOpen, toggleSlideCart }) => {
  return (
    <>
      <aside className={isCartOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <div className={styles.icon__container} onClick={toggleSlideCart}>
          <Icons type='left' filled width={40} height={40} />
        </div>
        <div className={styles.title__wrapper}>
          <h2 className={styles.title}>Корзина</h2>
        </div>
        <div className={styles.bag__block}>
          <Icons type='navBag2' filled={false} width={100} height={100} />
          <p>Нет товаров</p>
        </div>
        <div className={styles.btn__container}>
          <button type='button' onClick={toggleSlideCart} className={styles.btn__back}>
            <Icons type='left' filled width={40} height={40} />
            Вернуться к покупкам
          </button>
        </div>
      </aside>
    </>
  );
};
SlideOutCart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  toggleSlideCart: PropTypes.func.isRequired,
};

export default SlideOutCart;
