import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveLockScrollAction } from '../../../store/modal/actions';
import { getLockScrollSelector } from '../../../store/modal/selectors';
import { PERSONAL_INFO_ROUTE } from '../../../utils/consts';
import Icons from '../../Icons/Icons';
import RegAuth from '../../modals/RegAuth/RegAuth';
import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const lockScroll = useSelector(getLockScrollSelector);
  const [modalLogin, setmodalLogin] = useState(false);
  const isLogin = false;

  const modalHandler = () => {
    setmodalLogin(!modalLogin);
    dispatch(saveLockScrollAction(!lockScroll));
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

      <RegAuth buttonHandler={modalHandler} display={modalLogin} />
    </>
  );
};

export default Login;
