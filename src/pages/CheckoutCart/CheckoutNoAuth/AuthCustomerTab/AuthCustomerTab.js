import React from 'react';
import AuthForm from '../../../../components/RegAuth/AuthForm/AuthForm';
import styles from './AuthCustomerTab.module.scss';

const AuthCustomerTab = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
    </div>
  );
};

export default AuthCustomerTab;
