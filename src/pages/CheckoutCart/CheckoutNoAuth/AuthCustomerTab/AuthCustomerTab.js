import React, { useState } from 'react';
import AuthForm from '../../../../components/RegAuth/AuthForm/AuthForm';
import styles from './AuthCustomerTab.module.scss';

const AuthCustomerTab = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>
      <div className={styles.redTitle}>{messageServer}</div>
      <AuthForm setmessageServer={setmessageServer} />
    </div>
  );
};

export default AuthCustomerTab;
