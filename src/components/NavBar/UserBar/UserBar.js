import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCustomerSelector } from '../../../store/customer/selectors';
import { ADM_CATALOG_ROUTE, ORDERS_ROUTE, PERSONAL_INFO_ROUTE, WISH_LIST_ROUTE } from '../../../utils/consts';
import styles from './UserBar.module.scss';
import { saveCustomerAction, saveCustomerIsAuthAction } from '../../../store/customer/actions';

const UserBar = ({ className }) => {
  const dispatch = useDispatch();
  const customer = useSelector(getCustomerSelector);

  const output = () => {
    dispatch(saveCustomerAction({}));
    dispatch(saveCustomerIsAuthAction(false));
    localStorage.setItem('token', '');
  };

  return (
    <nav className={`${styles.menu} ${className}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to={PERSONAL_INFO_ROUTE} className={styles.link}>
            Личные данные
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={ORDERS_ROUTE} className={styles.link}>
            Заказы
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to={WISH_LIST_ROUTE} className={styles.link}>
            Список желаний
          </NavLink>
        </li>
        {customer.isAdmin ? (
          <li className={styles.item}>
            <NavLink to={ADM_CATALOG_ROUTE} className={styles.link}>
              Админпанель
            </NavLink>
          </li>
        ) : null}

        <li className={styles.item}>
          <span
            onClick={() => {
              output();
            }}
            className={styles.link}
          >
            Выйти
          </span>
        </li>
      </ul>
    </nav>
  );
};

UserBar.propTypes = {
  className: PropTypes.string,
};

UserBar.defaultProps = {
  className: '',
};

export default UserBar;
