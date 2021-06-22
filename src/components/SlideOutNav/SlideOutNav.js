/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../../utils/consts';
import DifferentPagesList from '../DifferentPagesList/DifferentPagesList';
import styles from './SlideOutNav.module.scss';
import Icons from '../Icons/Icons';
import menWatch from '../../theme/img/men-watch.webp';
import womenWatch from '../../theme/img/women-watch.webp';
import kidsWatch from '../../theme/img/kids-watch.webp';
import accessories from '../../theme/img/accessories-pic.webp';
import LoginRegNav from '../LoginRegNav/LoginRegNav';
// import CategoriesList from '../CategoriesList/CategoriesList';
// import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
// import { getWishListSelector } from '../../store/wishList/selectors';
// import { CUSTOMER_WISH_LIST_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
// import User from '../NavBar/User/User';

const SlideOutNav = ({ isOpen, toggleNav }) => {
  const [showLogin, setShowLogin] = useState(false);
  const toggleLoginReg = () => setShowLogin(!showLogin);
  // const isAuth = useSelector(getCustomerIsAuthSelector);
  // const wishList = useSelector(getWishListSelector);
  // const cartLocal = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
  // const cartQuantity = cartLocal !== {} ? cartLocal.products.length : 0;

  return (
    <>
      <aside className={isOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <div className={styles.icon__container} onClick={toggleNav}>
          <Icons type='close' width={35} height={35} />
        </div>
        <div className={styles.title__wrapper}>
          <h2 className={styles.title}>SmartElectronics</h2>
        </div>

        <div className={styles.menu} onClick={toggleNav}>
          <nav className={styles.menu__wrapper}>
            <ul className={styles.menu__slideOut}>
              <li className={styles.navItem}>
                <img className={styles.navIcon} src={menWatch} alt='men watch' />
                <NavLink to={`${PRODUCTS_ROUTE}/men`} className={styles.link} activeClassName={styles.activeLink}>
                  Мужские
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <img className={styles.navIcon} src={womenWatch} alt='women watch' />
                <NavLink to={`${PRODUCTS_ROUTE}/women`} className={styles.link} activeClassName={styles.activeLink}>
                  Женские
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <img className={styles.navIcon} src={kidsWatch} alt='kids watch' />
                <NavLink to={`${PRODUCTS_ROUTE}/kids`} className={styles.link} activeClassName={styles.activeLink}>
                  Детcкие
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <img className={styles.navIcon} src={accessories} alt='accessories' />
                <NavLink
                  to={`${PRODUCTS_ROUTE}/accessories`}
                  className={styles.link}
                  activeClassName={styles.activeLink}
                >
                  Аксессуары
                </NavLink>
              </li>
              <li className={styles.navItem} onClick={toggleLoginReg}>
                <div className={styles.navIcon}>
                  <Icons type='navUser' filled width={30} height={30} />
                </div>
                <p className={styles.navLabel}>Вход для клиентов</p>
              </li>
              <DifferentPagesList classLink={styles.link__differentPages} classItem={styles.navItem__differentPages} />
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='burger' filled width={30} height={30} />
                </div>
                <p className={styles.navLabel}>Мои заказы</p>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='navHeart' width={30} height={30} />
                </div>
                <p className={styles.navLabel}>Список желаний</p>
              </li>
              <li className={styles.navItem}>
                <img className={styles.hidden} src={accessories} alt='kids watch' />
                <p className={styles.navLabel}>Выход</p>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='phone' filled width={30} height={30} />
                </div>
                <p className={styles.navLabel}>044 322 23 32</p>
              </li>
              <li className={styles.navItem}>
                <img className={styles.hidden} src={accessories} alt='kids watch' />
                <div className={styles.navLabel}>044 223 32 23</div>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='whatsApp' filled={false} width={30} height={30} />
                </div>
                <p className={styles.navLabel}>+380 95 332 23 32</p>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='skype' filled={false} width={30} height={30} />
                </div>
                <p className={styles.navLabel}>skype</p>
              </li>
              <li className={styles.navItem}>
                <div className={styles.navIcon}>
                  <Icons type='telegram' filled={false} width={30} height={30} />
                </div>
                <p className={styles.navLabel}>telegram</p>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <LoginRegNav showLogin={showLogin} toggleLoginReg={toggleLoginReg} />
    </>
  );
};
SlideOutNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default SlideOutNav;
