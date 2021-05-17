/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { publicRoutes } from '../../routes/routes';
import { INDEX_ROUTE, PRODUCT_ROUTE, PRODUCTS_ROUTE, CHECKOUT_ROUTE } from '../../utils/consts';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const filteredLinks = publicRoutes.filter((r, ind) =>
    pathname === INDEX_ROUTE
      ? ind < 1
      : pathname === `${PRODUCT_ROUTE}/:id`
      ? ind < 2
      : pathname === `${PRODUCTS_ROUTE}/:categories`
      ? ind < 3
      : pathname === PRODUCTS_ROUTE
      ? ind < 4
      : pathname === CHECKOUT_ROUTE
      ? ind < 5
      : ''
  );

  return (
    <ul className={styles.breadcrumb}>
      {filteredLinks.map(({ name, path }) => (
        <li key={path}>
          <NavLink to={path} className={styles.link} activeClassName={styles.link__active} exact>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
