/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../Forms/MyTextInput/MyTextInput';
import Button from '../../../Button/Button';
import styles from './RegForm.module.scss';
import { createCustomerOperation } from '../../../../store/customer/operations';

const RegForm = ({ setTabIndex }) => {
  const dispatch = useDispatch();
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
        validationSchema={Yup.object({
          firstName: Yup.string().required('Укажите Ваше Имя'),
          lastName: Yup.string().required('Укажите Вашу Фамилию'),
          login: Yup.string().required('Укажите Ваш логин'),
          email: Yup.string().email('Неверный адрес email').required('Укажите email'),
          password: Yup.string()
            .min(8, 'Это шликом маленький пароль')
            .max(20, 'Такой пароль невозможно запомнить')
            .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
            .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
            .required('Необходимо ввести пароль'),
          confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const { firstName, lastName, login, email, password } = values;
          dispatch(createCustomerOperation({ setTabIndex, firstName, lastName, login, email, password }));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='Имя' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
          <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='-1' />
          <MyTextInput label='Логин' name='login' type='text' placeholder='Введите логин' tabIndex='-2' />
          <MyTextInput label='Email' name='email' type='text' placeholder='Введите email' tabIndex='-3' />

          <MyTextInput label='Пароль' name='password' type='password' placeholder='Введите пароль' tabIndex='-4' />
          <MyTextInput
            label='Повторите пароль'
            name='confirmPassword'
            type='password'
            placeholder='Подтвердите пароль'
            tabIndex='-5'
          />
          <div className={styles.buttonCont}>
            <div className={styles.widthCont}>
              <Button type='submit' title='Зарегистрироваться' className={styles.button} />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RegForm;
