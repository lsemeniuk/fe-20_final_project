import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import Modal from '../Modal/Modal';
import styles from './RegAuth.module.scss';
import AuthForm from './AuthForm/AuthForm';

const RegAuth = ({ buttonHandler, display }) => {
  return (
    <Modal buttonHandler={buttonHandler} modalWidth={570} display={display}>
      <Tabs>
        <TabList>
          <Tab>Вход</Tab>
          <Tab>Регистрация</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            <AuthForm />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>Any content 2</div>
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
