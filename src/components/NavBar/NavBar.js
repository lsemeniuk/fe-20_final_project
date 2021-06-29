import React, { useEffect, useRef, useState } from 'react';
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
import { getCatalogOperation } from '../../store/catalog/operations';
import { wishListLoadingAction } from '../../store/wishList/actions';
import { getProductsOperation } from '../../store/products/operations';
import { getColorsOperation } from '../../store/colors/operations';
import DifferentPagesList from '../DifferentPagesList/DifferentPagesList';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const location = useLocation();
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  const storageWishList = { products: JSON.parse(localStorage.getItem('WishList')) || [] };

  let favorites = 0;
  if (isAuth) {
    if (!wishListLoading && wishList) {
      favorites = wishList.products.length;
    }
  } else {
    favorites = wishList !== null ? wishList.length || 0 : 0;
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
      <Icons type='navHeart' color='#FFF' width={30} height={30} />
    </div>,
  ];

  const openMenu = () => {
    document.body.classList.add('lock');
    setMenuOpen(true);
  };

  const closeMenuHandler = e => {
    const modal = menuRef.current;
    const close = closeRef.current;
    if (modal.contains(e.target) && e.target !== close) {
      return;
    }
    document.body.classList.remove('lock');
    setMenuOpen(false);
  };

  return (
    <div className={styles.bgContainer}>
      <Container>
        <nav>
          <div className={styles.flexContainer}>
            <div onClick={() => openMenu()} className={styles.burger}>
              <span className={styles.burgerLine}>{}</span>
            </div>
            <div className={styles.logo}>
              {location.pathname === '/' ? (
                <Logo white />
              ) : (
                <NavLink to={INDEX_ROUTE}>
                  <Logo white />
                </NavLink>
              )}
            </div>
            <div className={styles.menuContainer}>
              <div className={menuOpen ? styles.adaptiveFade : styles.adaptiveFadeNone} onClick={closeMenuHandler}>
                <ul style={menuOpen ? { left: '-20px' } : { left: '-100%' }} className={styles.menuList} ref={menuRef}>
                  <div className={styles.titleStore}>
                    <div className={styles.arrow} ref={closeRef}>
                      {}
                    </div>
                    <div>SMART ELECTRONIX</div>
                  </div>
                  <div
                    className={styles.categoriesBlock}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    <CategoriesList
                      className={styles.menuLink}
                      classItem={styles.menuItem}
                      activeClassName={styles.menuLinkActive}
                    />
                  </div>
                  <div
                    className={styles.adaptiveBlock}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    <DifferentPagesList classLink={styles.menuLink} classItem={styles.menuItem} />
                  </div>
                  <div
                    className={styles.adaptiveBlock}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    <span className={styles.socTitle}>Мы в соцсетях</span>
                    <nav className={styles.social}>
                      <a className={styles.socialLink} target='blank' title='Мы Вконтакте!' href='https://vk.com/'>
                        <Icons type='vk' className={styles.socIcon} color='#acacac' />
                      </a>
                      <a
                        className={styles.socialLink}
                        target='blank'
                        title='Мы в Facebook!'
                        href='https://www.facebook.com/'
                      >
                        <Icons type='facebook' className={styles.socIcon} color='#acacac' />
                      </a>
                      <a
                        className={styles.socialLink}
                        target='blank'
                        title='Мы в твиттере!'
                        href='https://twitter.com/'
                      >
                        <Icons type='twitter' className={styles.socIcon} color='#acacac' />
                      </a>
                      <a
                        className={styles.socialLink}
                        target='blank'
                        title='Мы в инстаграмме'
                        href='https://instagram.com/'
                      >
                        <Icons type='instagram' className={styles.socIcon} color='#acacac' />
                      </a>
                    </nav>
                  </div>
                  <div className={styles.adaptiveBlock}>
                    <li className={styles.menuItem}>
                      <Icons type='phone' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a href='tel:+380440000000' className={styles.menuLink}>
                        044 000-00-00
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <Icons type='phone' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a href='tel:+380950000000' className={styles.menuLink}>
                        095 000-00-00
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <Icons type='whatsApp' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a
                        href='https://api.whatsapp.com/send?phone=whats-app'
                        className={styles.menuLink}
                        target='blank'
                        rel='noreferrer'
                      >
                        whats-app
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <Icons type='telegram' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a
                        href='tg://resolve?domain=telegram'
                        className={styles.menuLink}
                        target='blank'
                        rel='noreferrer'
                      >
                        telegram
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <Icons type='skype' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a href='skype:skype?call' className={styles.menuLink} target='blank' rel='noreferrer'>
                        skype
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <Icons type='email' className={styles.icons} color='#acacac' width={20} height={20} />
                      <a
                        href='mailto:timeshop.dan@gmail.com'
                        className={styles.menuLink}
                        target='blank'
                        rel='noreferrer'
                      >
                        mail@gmail.com
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
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
        </nav>
        {!isAuth && modalAuthReg && <RegAuth />}
      </Container>
    </div>
  );
};

export default NavBar;
