import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';
import Icons from '../../Icons/Icons';
import UserBar from '../UserBar/UserBar';
import styles from './User.module.scss';

const User = ({ modalHandler }) => {
  const isLogin = useSelector(getCustomerIsAuthSelector);

  const Icon = <Icons type='navUser' color='black' width={30} height={30} />;

  return (
    <div className={styles.container}>
      {isLogin ? (
        <div className={styles.icon}>{Icon}</div>
      ) : (
        <div className={styles.icon} onClick={() => modalHandler()}>
          {Icon}
        </div>
      )}
      {isLogin ? <UserBar className={styles.userBar} /> : null}
    </div>
  );
};

User.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

export default User;
