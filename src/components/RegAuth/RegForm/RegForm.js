import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../Forms/MyTextInput/MyTextInput';
import Button from '../../Button/Button';
import styles from './RegForm.module.scss';
import { createCustomerOperation } from '../../../store/customer/operations';

const RegForm = ({ setTabIndex }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Это шликом маленькое имя')
      .max(25, 'Неповерю что Вас так зовут')
      .required('Укажите Ваше имя'),
    lastName: Yup.string()
      .min(2, 'Извените, этого маловато для фамилии')
      .max(25, 'Возможно немного сократить?')
      .required('Укажите Вашу фамилию'),
    login: Yup.string()
      .min(3, 'Придумайте что-нибудь длиннее')
      .max(10, 'Это слишком большой логин')
      .required('Укажите Ваш логин'),
    email: Yup.string().email('Неверный адрес email').required('Укажите email'),
    password: Yup.string()
      .min(7, 'Это шликом маленький пароль')
      .max(30, 'Такой пароль невозможно запомнить')
      .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
      .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
      .required('Необходимо ввести пароль'),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
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
          dispatch(createCustomerOperation({ setTabIndex, firstName, lastName, login, email, password }));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='Имя' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
          <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='0' />
          <MyTextInput label='Логин' name='login' type='text' placeholder='Введите логин' tabIndex='0' />
          <MyTextInput label='Email' name='email' type='text' placeholder='Введите email' tabIndex='0' />

          <MyTextInput label='Пароль' name='password' type='password' placeholder='Введите пароль' tabIndex='0' />
          <MyTextInput
            label='Повторите пароль'
            name='confirmPassword'
            type='password'
            placeholder='Подтвердите пароль'
            tabIndex='0'
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

RegForm.propTypes = {
  setTabIndex: PropTypes.func.isRequired,
};

export default RegForm;