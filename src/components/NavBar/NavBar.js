/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { INDEX_ROUTE, PERSONAL_INFO_ROUTE, PRODUCTS_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import { replace } from '../../utils/func';
import logo from '../../theme/logo.png';
import Cart from '../modals/Cart/Cart';
import Icons from '../Icons/Icons';
import styles from './NavBar.module.scss';
import Loader from '../Loader/Loader';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../store/catalog/selectors';
import { getCatalogOperation } from '../../store/catalog/operations';

const NavBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const isLoading = useSelector(categoriesLoadingSelector);
  const [modalCart, setmodalCart] = useState(false);
  const location = useLocation();

  const favorites = 3;
  const cart = 2;

  const modalHandler = () => {
    setmodalCart(!modalCart);
    document.body.classList.toggle('lock');
  };

  useEffect(() => {
    dispatch(getCatalogOperation());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.bgContainer}>
        <Loader />
      </div>
    );
  }

  const logoJsx = [<img src={logo} width={200} height={60} alt='logo' key='image' />];
  const heartJsx = [
    <div key='heart' className={styles.iconListItem}>
      <Icons type='navHeart' color='black' width={30} height={30} />
    </div>,
  ];

  return (
    <div className={styles.bgContainer}>
      <Container>
        <div className={styles.flexContainer}>
          <div>{location.pathname === '/' ? logoJsx : <NavLink to={INDEX_ROUTE}>{logoJsx}</NavLink>}</div>
          <div className={styles.menuContainer}>
            <ul className={styles.menuList}>
              <li key='all'>
                <NavLink to={PRODUCTS_ROUTE} className={styles.menuLink}>
                  Все товары
                </NavLink>
              </li>
              {categories.map(i => {
                return (
                  <li key={i.id}>
                    <NavLink to={`${PRODUCTS_ROUTE}/${i.id}`} className={styles.menuLink}>
                      {i.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.iconList}>
              <li key='favorites'>
                {favorites ? (
                  <NavLink to={INDEX_ROUTE}>
                    {heartJsx}
                    <span className={styles.favorites}>{favorites}</span>
                  </NavLink>
                ) : (
                  heartJsx
                )}
              </li>
              <li key='personalInfo' className={styles.iconListItem}>
                <NavLink to={PERSONAL_INFO_ROUTE}>
                  <Icons type='navUser' color='black' width={30} height={30} />
                </NavLink>
              </li>
              {cart ? (
                <li key='cart' className={`${styles.iconListItem} ${styles.cartLink}`} onClick={modalHandler}>
                  <div className={styles.iconCart}>
                    <Icons type='navBag' color='black' width={25} height={45} />
                    <span className={styles.productToCart}>{cart}</span>
                  </div>
                  <div className={styles.infoCart}>
                    <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
                    <span className={styles.menuOrderPrice}>{`${replace(11321)} грн`}</span>
                  </div>
                </li>
              ) : (
                <li key='emptyСart' className={styles.iconListItem}>
                  <div className={styles.iconCart}>
                    <Icons type='navBag' color='black' width={25} height={45} />
                    <span className={styles.productToCart}>0</span>
                  </div>
                  <div className={styles.infoCart}>
                    <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
      {modalCart && <Cart buttonHandler={modalHandler} />}
    </div>
  );
};

export default NavBar;
