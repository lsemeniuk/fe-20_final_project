import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../Forms/MyTextInput/MyTextInput';
import Button from '../../Button/Button';
import styles from './AuthForm.module.scss';
import { authorizOperation } from '../../../store/customer/operations';

const AuthForm = ({ setmessageServer }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    loginOrEmail: Yup.string().email('Неверный адрес email').required('Укажите email'),
    password: Yup.string()
      .min(7, 'Это шликом маленький пароль')
      .max(20, 'Такой пароль невозможно запомнить')
      .required('Необходимо ввести пароль'),
  });

  return (
    <>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { loginOrEmail, password } = values;
          dispatch(authorizOperation({ setmessageServer, loginOrEmail, password }));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='Email' name='loginOrEmail' type='text' placeholder='Введите email' tabIndex='0' />

          <MyTextInput label='Пароль' name='password' type='password' placeholder='Введите пароль' tabIndex='-1' />
          <div className={styles.buttonCont}>
            <div className={styles.widthCont}>
              <Button type='submit' title='Войти' className={styles.button} />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

AuthForm.propTypes = {
  setmessageServer: PropTypes.func.isRequired,
};

export default AuthForm;
