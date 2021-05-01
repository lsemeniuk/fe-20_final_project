import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveModalAuthRegAction } from '../../../store/modal/actions';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import { PERSONAL_INFO_ROUTE } from '../../../utils/consts';
import Icons from '../../Icons/Icons';
import RegAuth from '../../modals/RegAuth/RegAuth';
import styles from './User.module.scss';

const User = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const isLogin = false;

  const modalHandler = () => {
    dispatch(saveModalAuthRegAction(!modalAuthReg));
    document.body.classList.toggle('lock');
  };

  const Icon = <Icons type='navUser' color='black' width={30} height={30} />;

  return (
    <>
      {isLogin ? (
        <NavLink to={PERSONAL_INFO_ROUTE}>{Icon}</NavLink>
      ) : (
        <div className={styles.icon} onClick={() => modalHandler()}>
          {Icon}
        </div>
      )}

      <RegAuth buttonHandler={modalHandler} display={modalAuthReg} />
    </>
  );
};

export default User;
