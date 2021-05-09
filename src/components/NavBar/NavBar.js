/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { INDEX_ROUTE, PRODUCTS_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import Icons from '../Icons/Icons';
import MyOrders from './MyOrders/MyOrders';
import Logo from '../../theme/Logo';
import CategoriesList from './CategoriesList/CategoriesList';
import User from './User/User';
import RegAuth from '../modals/RegAuth/RegAuth';
import { getModalAuthRegSelector } from '../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import styles from './NavBar.module.scss';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';

const NavBar = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);

  const wishListLoading = useSelector(wishListLoadingSelector);
  const wishList = useSelector(getWishListSelector);
  const location = useLocation();

  let favorites = 0;
  if (!wishListLoading) {
    console.log(wishList);
    if (wishList) {
      favorites = wishList.products.length;
    }
  }
  console.log(favorites);

  const authRegHandler = () => {
    dispatch(saveModalAuthRegAction(!modalAuthReg));
    document.body.classList.toggle('lock');
  };

  const heartJsx = [
    <div key='heart' className={styles.iconListItem}>
      <Icons type='navHeart' color='#000' width={30} height={30} />
    </div>,
  ];

  return (
    <div className={styles.bgContainer}>
      <Container>
        <nav>
          <div className={styles.flexContainer}>
            <div>
              {location.pathname === '/' ? (
                <Logo />
              ) : (
                <NavLink to={INDEX_ROUTE}>
                  <Logo />
                </NavLink>
              )}
            </div>
            <div className={styles.menuContainer}>
              <ul className={styles.menuList}>
                <li key='all'>
                  <NavLink to={PRODUCTS_ROUTE} className={styles.menuLink}>
                    Все товары
                  </NavLink>
                </li>
                <CategoriesList className={styles.menuLink} />
              </ul>
              <ul className={styles.iconList}>
                <li key='wishList'>
                  {wishList && favorites !== 0 ? (
                    <NavLink to={WISH_LIST_ROUTE}>
                      {heartJsx}
                      <span className={styles.favorites}>{favorites}</span>
                    </NavLink>
                  ) : (
                    heartJsx
                  )}
                </li>
                <li key='personalInfo' className={styles.iconListItem}>
                  <User modalHandler={authRegHandler} />
                </li>
                <li key='cart' className={styles.iconListItem}>
                  <MyOrders />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {!isAuth && <RegAuth />}
      </Container>
    </div>
  );
};

export default NavBar;
