/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { INDEX_ROUTE, WISH_LIST_ROUTE, CUSTOMER_WISH_LIST_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import Icons from '../Icons/Icons';
import MyOrders from './MyOrders/MyOrders';
import Logo from '../../theme/Logo';
import CategoriesList from '../CategoriesList/CategoriesList';
import User from './User/User';
import RegAuth from '../RegAuth/RegAuth';
import { getModalAuthRegSelector } from '../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';
import { getWishListOperation, updateWishListOperation } from '../../store/wishList/operations';
import { getCartOperation, updateCartOperation, setCartTotalPriceOperation } from '../../store/cart/operations';
import { cartLoadingSelector, cartTotalPriceSelector, getCartSelector } from '../../store/cart/selectors';
import { getCatalogOperation } from '../../store/catalog/operations';
import { wishListLoadingAction } from '../../store/wishList/actions';
import { getProductsOperation } from '../../store/products/operations';
import { getColorsOperation } from '../../store/colors/operations';
import SlideOutNav from './SlideOutNav/SlideOutNav';
import SlideOutCart from './SlideOutCart/SlideOutCart';
import styles from './NavBar.module.scss';
import { replace } from '../../utils/func';

const NavBar = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const cart = useSelector(getCartSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const totalPrice = replace(useSelector(cartTotalPriceSelector));
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const location = useLocation();
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSlideCart = () => setIsCartOpen(!isCartOpen);
  const storageWishList = { products: JSON.parse(localStorage.getItem('WishList')) || [] };

  let favorites = 0;
  let itemsInCart = 0;

  if (isAuth) {
    if (!wishListLoading && wishList) {
      favorites = wishList.products.length;
    }
  } else {
    favorites = wishList !== null ? wishList.length || 0 : 0;
  }

  if (isAuth) {
    if (!cartLoading) {
      itemsInCart = cart ? cart.products.reduce((a, i) => a + i.cartQuantity, 0) : 0;
    }
  } else {
    itemsInCart = '';
  }

  useEffect(() => {
    dispatch(getCatalogOperation());
    dispatch(getProductsOperation());
    dispatch(wishListLoadingAction(true));
    dispatch(getColorsOperation());
    if (isAuth) {
      dispatch(getWishListOperation());
      dispatch(updateWishListOperation(storageWishList));
      if (localCart) {
        dispatch(updateCartOperation(localCart));
      } else {
        dispatch(getCartOperation());
      }
    } else {
      dispatch(setCartTotalPriceOperation(localCart));
    }
  }, [isAuth]);

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
        <nav className={styles.row}>
          <div className={styles.burger} onClick={toggleNav}>
            <Icons type='burger' filled />
          </div>
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
                <CategoriesList className={styles.menuLink} activeClassName={styles.menuLinkActive} />
              </ul>
              <ul className={styles.iconList}>
                <li key='wishList'>
                  {wishList && favorites !== 0 ? (
                    <NavLink to={isAuth ? WISH_LIST_ROUTE : CUSTOMER_WISH_LIST_ROUTE}>
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
          <div className={styles.adaptive__icons__block}>
            <Icons type='search' width={30} height={30} />
            {wishList && favorites !== 0 ? (
              <NavLink to={isAuth ? WISH_LIST_ROUTE : CUSTOMER_WISH_LIST_ROUTE} className={styles.heart__parent}>
                <Icons type='navHeart' width={25} height={25} />
                <span className={styles.favorites__mobile}>{favorites}</span>
              </NavLink>
            ) : (
              <Icons type='navHeart' width={25} height={25} />
            )}
            {isAuth && (
              <div className={styles.user}>
                <User />
              </div>
            )}
            <div className={styles.navBag__container}>
              {itemsInCart > 0 && <span className={styles.navBag__price}>{totalPrice}</span>}
              <Icons type='navBag2' width={30} height={30} onClick={toggleSlideCart} />
              {itemsInCart > 0 && <span className={styles.itemsInCart__mobile}>{itemsInCart}</span>}
            </div>
          </div>
        </nav>
        {!isAuth && modalAuthReg && <RegAuth />}
        <SlideOutNav toggleNav={toggleNav} isNavOpen={isNavOpen} />
        <SlideOutCart toggleSlideCart={toggleSlideCart} isCartOpen={isCartOpen} />
      </Container>
    </div>
  );
};

export default NavBar;
