/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AuthForm from '../RegAuth/AuthForm/AuthForm';
import RegForm from '../RegAuth/RegForm/RegForm';

import styles from './LoginRegNav.module.scss';
import Icons from '../Icons/Icons';

const LoginRegNav = ({ showLogin, toggleLoginReg }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [messageServer, setmessageServer] = useState(null);
  const [forgotOpen, setForgotOpen] = useState(false);
  const setTabIndexToReg = () => {
    setmessageServer(
      <span style={{ color: 'green' }}>
        Поздравляем, Вы зарегистрированы <br />А теперь введите свои email и пароль
      </span>
    );
    setTabIndex(0);
  };
  return (
    <aside className={showLogin ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div className={styles.form__container}>
        <div className={styles.icon__container} onClick={toggleLoginReg}>
          <Icons type='close' width={35} height={35} />
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab tabIndex='0'>Вход</Tab>
            <Tab tabIndex='0'>Регистрация</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.form}>
              <div className={styles.redTitle}>{messageServer}</div>
              <AuthForm setmessageServer={setmessageServer} setForgotOpen={setForgotOpen} forgotOpen={forgotOpen} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.form}>
              <RegForm setTabIndex={setTabIndexToReg} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </aside>
  );
};
LoginRegNav.propTypes = {
  showLogin: PropTypes.bool.isRequired,
  toggleLoginReg: PropTypes.func.isRequired,
};

export default LoginRegNav;
