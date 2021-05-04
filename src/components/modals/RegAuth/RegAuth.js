import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Modal from '../Modal/Modal';
import AuthForm from './AuthForm/AuthForm';
import RegForm from './RegForm/RegForm';
import styles from './RegAuth.module.scss';

const RegAuth = ({ buttonHandler, display }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [regTitle, setregTitle] = useState(null);

  const setTabIndexToReg = () => {
    setregTitle(
      <div className={styles.regTitle}>
        Поздравляем, Вы зарегистрированы <br />А теперь введите свои email и пароль
      </div>
    );
    setTabIndex(0);
  };

  return (
    <Modal buttonHandler={buttonHandler} modalWidth={570} display={display}>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>Вход</Tab>
          <Tab tabIndex='0'>Регистрация</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            {regTitle}
            <AuthForm />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <RegForm setTabIndex={setTabIndexToReg} />
          </div>
        </TabPanel>
      </Tabs>
    </Modal>
  );
};

RegAuth.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
};

export default RegAuth;
