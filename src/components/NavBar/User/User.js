/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerIsAuthSelector, getCustomerSelector } from '../../../store/customer/selectors';
import Icons from '../../Icons/Icons';
import UserBar from '../UserBar/UserBar';
import styles from './User.module.scss';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../../store/modal/actions';

const User = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const Icon = <Icons type='navUser' color='black' width={30} height={30} />;
  const [initials, setInitials] = useState('');
  const { firstName, lastName } = useSelector(getCustomerSelector);

  useEffect(() => {
    if (isAuth) {
      setInitials(firstName.slice(0, 1) + lastName.slice(0, 1));
    }
  }, [isAuth]);

  return (
    <div className={styles.container}>
      {isAuth ? (
        <div className={styles.circle}>
          <span className={styles.initials}>{initials}</span>
        </div>
      ) : (
        <div
          className={styles.icon}
          onClick={() => {
            dispatch(saveModalAuthRegAction(!modalAuthReg));
          }}
        >
          {Icon}
        </div>
      )}

      {isAuth ? <UserBar className={styles.userBar} /> : null}
    </div>
  );
};
export default User;
