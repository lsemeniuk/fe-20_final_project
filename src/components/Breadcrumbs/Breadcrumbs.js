/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { crumbsRoutes } from '../../routes/routes';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathArr = pathname.split('/');
  const filteredLinks = crumbsRoutes.filter((r, ind, arr) =>
    pathname === '/'
      ? ind < 1
      : pathname === '/products'
      ? ind < 2
      : pathname === '/products/men'
      ? ind < 3
      : pathname === '/products/women'
      ? ind < 3
      : pathname === '/products/kids'
      ? ind < 3
      : pathname === '/products/accessories'
      ? ind < 3
      : ind < arr.length
  );

  return (
    <ul className={styles.breadcrumb}>
      {filteredLinks.map(({ name, path }) => (
        <li key={path}>
          <NavLink to={path} className={styles.link} exact>
            {name}
          </NavLink>
        </li>
      ))}
      {pathArr[2] && !Number.isNaN(+pathArr[2]) && (
        <li>
          <span className={styles.link}>Товар</span>
        </li>
      )}
    </ul>
  );
};

export default Breadcrumbs;
