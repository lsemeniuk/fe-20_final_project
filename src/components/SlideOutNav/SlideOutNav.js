/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlideOutNav.module.scss';
import Icons from '../Icons/Icons';
import CategoriesList from '../CategoriesList/CategoriesList';

const SlideOutNav = ({ isOpen, toggleNav }) => {
  return (
    <aside className={isOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div className={styles.icon__container} onClick={toggleNav}>
        <Icons type='close' filled />
      </div>
      <div className={styles.menu__wrapper} onClick={toggleNav}>
        <ul className={styles.menu__slideOut}>
          <CategoriesList className={styles.menuLink} activeClassName={styles.menuLinkActive} />
          <li>Favorites</li>
          <li>User</li>
          <li>Cart</li>
        </ul>
      </div>
    </aside>
  );
};
SlideOutNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};
export default SlideOutNav;
