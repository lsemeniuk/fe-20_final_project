import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import MyTextInput from '../../Forms/MyTextInput/MyTextInput';
import { forgotPassword } from '../../../http/customersAPI';
import styles from './ForgotPassword.module.scss';

const ForgotPassword = ({ setForgotOpen }) => {
  const [messageServer, setmessageServer] = useState(null);
  const [successResponse, setSuccessResponse] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Неверный адрес email').required('Укажите email'),
  });

  return (
    <>
      <h2 className={styles.title}>Восстановление пароля</h2>

      {successResponse ? (
        <>
          <p className={styles.textContent}>На указанный Email были отправлены инструкции по восстановлению пароля</p>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <p className={styles.textContent}>
              Введите адрес электронной почты, который вы указывали при регистрации. Мы отправим письмо с информацией
              для восстановления пароля.
            </p>
          </div>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              forgotPassword(values)
                .then(res => {
                  setSuccessResponse(true);
                  return res;
                })
                .catch(err => {
                  setmessageServer(<span>{err.data.message}</span>);
                });
              setSubmitting(false);
            }}
          >
            <Form>
              <MyTextInput label='Эл. почта' name='email' type='text' placeholder='Введите email' tabIndex='0' />

              <div className={styles.buttonCont}>
                <div className={styles.widthCont}>
                  <div className={styles.redTitle}>{messageServer}</div>
                  <Button type='submit' title='Восстановить' className={styles.button} />
                  <div className={styles.back} onClick={() => setForgotOpen(false)}>
                    &lArr; Назад
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};

ForgotPassword.propTypes = {
  setForgotOpen: PropTypes.func.isRequired,
};

export default ForgotPassword;
