import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Modal from '../Modal/Modal';
import AuthForm from './AuthForm/AuthForm';
import RegForm from './RegForm/RegForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { getModalAuthRegSelector } from '../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import styles from './RegAuth.module.scss';

const RegAuth = () => {
  const dispatch = useDispatch();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const [tabIndex, setTabIndex] = useState(0);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <Modal
      buttonHandler={() => {
        dispatch(saveModalAuthRegAction(!modalAuthReg));
      }}
      modalWidth={570}
    >
      {forgotOpen ? (
        <ForgotPassword setForgotOpen={setForgotOpen} />
      ) : (
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab tabIndex='0'>Вход</Tab>
            <Tab tabIndex='0'>Регистрация</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.form}>
              <AuthForm setForgotOpen={setForgotOpen} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.form}>
              <RegForm />
            </div>
          </TabPanel>
        </Tabs>
      )}
    </Modal>
  );
};

export default RegAuth;
