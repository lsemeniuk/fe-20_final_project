/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SlideOutNav.module.scss';
import Icons from '../Icons/Icons';
import CategoriesList from '../CategoriesList/CategoriesList';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { getWishListSelector } from '../../store/wishList/selectors';
import { CUSTOMER_WISH_LIST_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
import User from '../NavBar/User/User';

const SlideOutNav = ({ isOpen, toggleNav, favorites, modalHandler }) => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const wishList = useSelector(getWishListSelector);

  return (
    <aside className={isOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div className={styles.icon__container} onClick={toggleNav}>
        <Icons type='close' filled />
      </div>
      <div className={styles.menu__wrapper} onClick={toggleNav}>
        <ul className={styles.menu__slideOut}>
          <CategoriesList className={styles.menuLink} activeClassName={styles.menuLinkActive} />
          <div className={styles.iconsGroup}>
            <li key='wishList'>
              {wishList && favorites !== 0 ? (
                <NavLink to={isAuth ? WISH_LIST_ROUTE : CUSTOMER_WISH_LIST_ROUTE}>
                  <div className={styles.heart__container}>
                    <Icons type='navHeart' filled color='#fff' />
                    <span className={styles.heartQuantity}>{favorites}</span>
                  </div>
                </NavLink>
              ) : (
                <Icons type='navHeart' filled color='#fff' />
              )}
            </li>
            <li key='personalInfo' className={styles.iconListItem}>
              <User modalHandler={modalHandler} filled={false} />
            </li>
            <li>
              <p>Моя Корзинушка</p>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
};
SlideOutNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  favorites: PropTypes.number,
  modalHandler: PropTypes.func.isRequired,
};
SlideOutNav.defaultProps = {
  favorites: 0,
};
export default SlideOutNav;
