/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { INDEX_ROUTE, PERSONAL_INFO_ROUTE, PRODUCTS_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import logo from '../../theme/logo.png';
import Icons from '../Icons/Icons';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../store/catalog/selectors';
import { getCatalogOperation } from '../../store/catalog/operations';
import MyOrders from './MyOrders/MyOrders';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const isLoading = useSelector(categoriesLoadingSelector);
  const location = useLocation();

  const favorites = 3;

  useEffect(() => {
    dispatch(getCatalogOperation());
  }, [dispatch]);

  if (isLoading) {
    return <div className={styles.bgContainer}>{}</div>;
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
        <nav>
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
                <li key='cart' className={styles.iconListItem}>
                  <MyOrders />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
