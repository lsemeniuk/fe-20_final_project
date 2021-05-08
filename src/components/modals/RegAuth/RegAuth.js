import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Modal from '../Modal/Modal';
import AuthForm from './AuthForm/AuthForm';
import RegForm from './RegForm/RegForm';
import { getModalAuthRegSelector } from '../../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../../store/modal/actions';
import styles from './RegAuth.module.scss';

const RegAuth = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const [tabIndex, setTabIndex] = useState(0);
  const [messageServer, setmessageServer] = useState(null);

  const setTabIndexToReg = () => {
    setmessageServer(
      <span style={{ color: 'green' }}>
        Поздравляем, Вы зарегистрированы <br />А теперь введите свои email и пароль
      </span>
    );
    setTabIndex(0);
  };

  return (
    <Modal
      buttonHandler={() => {
        dispatch(saveModalAuthRegAction(!modalAuthReg));
      }}
      modalWidth={570}
      display={modalAuthReg}
    >
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>Вход</Tab>
          <Tab tabIndex='0'>Регистрация</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            <div className={styles.redTitle}>{messageServer}</div>
            <AuthForm setmessageServer={setmessageServer} />
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

export default RegAuth;
