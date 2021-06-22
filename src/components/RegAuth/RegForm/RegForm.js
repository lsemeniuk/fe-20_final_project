import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../Forms/MyTextInput/MyTextInput';

import Button from '../../Button/Button';
import { createCustomerOperation } from '../../../store/customer/operations';
import styles from './RegForm.module.scss';

const RegForm = () => {
  const dispatch = useDispatch();
  const [messageServer, setmessageServer] = useState(null);
  const [isAcceptedPrivacyPolicyState, setIsAcceptedPrivacyPolicy] = useState(false);
  const isAcceptedPrivacyPolicy = useRef(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Минимальное количество символов - 2')
      .max(25, 'Возможно не больше 25 символов')
      .required('Укажите Ваше имя'),
    lastName: Yup.string()
      .min(2, 'Минимальное количество символов - 2')
      .max(25, 'Возможно не больше 25 символов')
      .required('Укажите Вашу фамилию'),
    login: Yup.string()
      .min(3, 'Минимальное количество символов - 3')
      .max(10, 'Возможно не больше 10 символов')
      .required('Укажите Ваш логин'),
    email: Yup.string().email('Неверный адрес email').required('Укажите email'),
    password: Yup.string()
      .min(7, 'Минимальное количество символов - 7')
      .max(30, 'Возможно не больше 30 символов')
      .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
      .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
      .required('Укажите Ваш пароль'),
    confirmPassword: Yup.string()
      .required('Подтвердите Ваш пароль')
      .oneOf([Yup.ref('password'), null], 'Пароли не совпадают'),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { firstName, lastName, login, email, password } = values;
          dispatch(
            createCustomerOperation({
              setmessageServer,
              firstName,
              lastName,
              login,
              email,
              password,
            })
          );
          setSubmitting(false);
        }}
        validateOnMount
      >
        {formik => {
          return (
            <Form>
              <div className={styles.messageServer}>{messageServer}</div>
              <MyTextInput label='Имя*' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
              <MyTextInput label='Фамилия*' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='0' />
              <MyTextInput label='Логин*' name='login' type='text' placeholder='Введите логин' tabIndex='0' />
              <MyTextInput label='Email*' name='email' type='text' placeholder='Введите email' tabIndex='0' />

              <MyTextInput label='Пароль*' name='password' type='password' placeholder='Введите пароль' tabIndex='0' />
              <MyTextInput
                label='Повторите пароль*'
                name='confirmPassword'
                type='password'
                placeholder='Подтвердите пароль'
                tabIndex='0'
              />

              <div className={styles.checkbox}>
                <input
                  onChange={() => {
                    setIsAcceptedPrivacyPolicy(!isAcceptedPrivacyPolicyState);
                  }}
                  ref={isAcceptedPrivacyPolicy}
                  type='checkbox'
                  name='privacyPolicy'
                />
                <label className={styles.labelForCheckbox} htmlFor='privacyPolicy'>
                  Я даю согласие на обработку персональных данных
                </label>
              </div>

              <div className={styles.buttonCont}>
                <div className={styles.widthCont}>
                  <Button
                    type='submit'
                    title='Зарегистрироваться'
                    disabled={!(isAcceptedPrivacyPolicyState && formik.dirty && formik.isValid)}
                    className={
                      isAcceptedPrivacyPolicyState && formik.dirty && formik.isValid ? styles.button : styles.disabled
                    }
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegForm;
