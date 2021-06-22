/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SlideUpNav.module.scss';
import { PRODUCTS_ROUTE } from '../../utils/consts';
import Icons from '../Icons/Icons';
import menWatch from '../../theme/img/men-watch.webp';
import womenWatch from '../../theme/img/women-watch.webp';
import kidsWatch from '../../theme/img/kids-watch.webp';
import accessories from '../../theme/img/accessories-pic.webp';

const SlideUpNav = ({ isOpen, toggleCatalogNav }) => {
  // const isAuth = useSelector(getCustomerIsAuthSelector);
  // const wishList = useSelector(getWishListSelector);

  // const cartLocal = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  // const cartQuantity = cartLocal !== {} ? cartLocal.products.length : 0;

  return (
    <aside className={isOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div className={styles.icon__container} onClick={toggleCatalogNav}>
        <Icons type='close' width={35} height={35} />
      </div>
      <div className={styles.title__wrapper}>
        <h2 className={styles.title}>SmartElectronics</h2>
      </div>
      <div className={styles.menu} onClick={toggleCatalogNav}>
        <div className={styles.menu__wrapper}>
          <ul className={styles.menu__slideOut}>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={menWatch} alt='men watch' />
              <NavLink to={`${PRODUCTS_ROUTE}/men`}>
                <p className={styles.navLabel}>Мужские</p>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={womenWatch} alt='women watch' />
              <NavLink to={`${PRODUCTS_ROUTE}/women`}>
                <p className={styles.navLabel}>Женские</p>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={kidsWatch} alt='kids watch' />
              <NavLink to={`${PRODUCTS_ROUTE}/kids`}>
                <p className={styles.navLabel}>Детские</p>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <img className={styles.navIcon} src={accessories} alt='accessories' />
              <NavLink to={`${PRODUCTS_ROUTE}/accessories`}>
                <p className={styles.navLabel}>Аксессуары</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
SlideUpNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCatalogNav: PropTypes.func.isRequired,
};

export default SlideUpNav;
