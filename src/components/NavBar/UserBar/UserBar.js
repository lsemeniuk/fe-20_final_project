import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getCustomerSelector } from '../../../store/customer/selectors';
import { ADM_ORDERS_ROUTE, ORDERS_ROUTE, PERSONAL_INFO_ROUTE, WISH_LIST_ROUTE } from '../../../utils/consts';
import styles from './UserBar.module.scss';
import { outPutCustomerOperation } from '../../../store/customer/operations';

const UserBar = ({ className }) => {
  const dispatch = useDispatch();
  const customer = useSelector(getCustomerSelector);
  const history = useHistory();

  const output = () => {
    dispatch(outPutCustomerOperation());
    history.push('/');
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
            <NavLink to={ADM_ORDERS_ROUTE} className={styles.link}>
              Админ панель
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
