/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../Forms/MyTextInput/MyTextInput';
import Button from '../../../Button/Button';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        validationSchema={Yup.object({
          loginOrEmail: Yup.string().email('Неверный адрес email').required('Укажите email'),
          password: Yup.string()
            .min(8, 'Это шликом маленький пароль')
            .max(20, 'Такой пароль невозможно запомнить')
            .required('Необходимо ввести пароль'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <MyTextInput label='Email' name='loginOrEmail' type='text' placeholder='Введите email' tabIndex='0' />

            <MyTextInput label='Пароль' name='password' type='text' placeholder='Введите пароль' tabIndex='-1' />
            <div className={styles.buttonCont}>
              <div className={styles.widthCont}>
                <Button type='submit' title='Войти' onClick={props.handleSubmit} className={styles.button} />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
