import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';
import Icons from '../../Icons/Icons';
import UserBar from '../UserBar/UserBar';
import styles from './User.module.scss';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../../store/modal/actions';

const User = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const isLogin = useSelector(getCustomerIsAuthSelector);

  const Icon = <Icons type='navUser' color='black' width={30} height={30} />;

  return (
    <div className={styles.container}>
      {isLogin ? (
        <div className={styles.icon}>{Icon}</div>
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

      {isLogin ? <UserBar className={styles.userBar} /> : null}
    </div>
  );
};

export default User;