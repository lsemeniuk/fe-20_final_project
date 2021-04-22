import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { INDEX_ROUTE, MEN_ROUTE, WOMEN_ROUTE, CHILDREN_ROUTE, ACCESSORIES_ROUTE, ORDERS_ROUTE } from '../../utils/consts';
import IconHeart from '../Icons/Heart.svg';
import IconUser from '../Icons/User.svg';
import NavbarPrice from '../NavbarPrice/NavbarPrice';
import NavbarCounter from '../NavbarCounter/NavbarCounter';
import style from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={style.container}>
      <div>
        <NavLink to={INDEX_ROUTE} className={style.logoLink}>
          <img src='images/logo.png' alt='logo' className={style.logo} />
        </NavLink>
      </div>
      <div className={style.menuContainer}>
        <ul className={style.menuList}>
          <li>
            <NavLink to={MEN_ROUTE} className={style.menuLink}>
              Мужские
            </NavLink>
          </li>
          <li>
            <NavLink to={WOMEN_ROUTE} className={style.menuLink}>
              Женские
            </NavLink>
          </li>
          <li>
            <NavLink to={CHILDREN_ROUTE} className={style.menuLink}>
              Детские
            </NavLink>
          </li>
          <li>
            <Link to={ACCESSORIES_ROUTE} className={style.menuLink}>
              Аксессуары
            </Link>
          </li>
        </ul>
        <ul className={style.iconList}>
          <li className={style.iconListItem}>
            <img src={IconHeart} alt='liked' />
          </li>
          <li className={style.iconListItem}>
            <Link to='/'>
              <img src={IconUser} alt='user' />
            </Link>
          </li>
          <li className={style.iconListItem}>
            <Link to={ORDERS_ROUTE}>
              <div className={`${style.iconCart} ${style.cartCounter}`}>
                <NavbarCounter />
              </div>
            </Link>
          </li>
          <li>
            <Link to={ORDERS_ROUTE} className={style.menuLinkMyOrder}>
              <span className={style.menuOrderTitle}>Мой заказ</span>
              <span className={style.menuOrderPrice}>
                <NavbarPrice />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
