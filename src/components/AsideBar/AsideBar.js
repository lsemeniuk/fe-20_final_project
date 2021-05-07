import React from 'react';
import { NavLink } from 'react-router-dom';
import { ORDERS_ROUTE, USER_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';

const AsideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={USER_ROUTE}>Песональная информация</NavLink>
        </li>
        <li>
          <NavLink to={ORDERS_ROUTE}>Заказы</NavLink>
        </li>
        <li>
          <NavLink to={WISH_LIST_ROUTE}>Список желаний</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AsideBar;
