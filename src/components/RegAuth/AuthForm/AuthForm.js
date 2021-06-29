import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../Forms/MyTextInput/MyTextInput';
import Button from '../../Button/Button';
import { authorizOperation } from '../../../store/customer/operations';
import styles from './AuthForm.module.scss';

const AuthForm = ({ setForgotOpen }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    loginOrEmail: Yup.string().email('Неверный адрес email').required('Укажите email'),
    password: Yup.string().required('Необходимо ввести пароль'),
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
          dispatch(authorizOperation({ loginOrEmail, password }));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='Email' name='loginOrEmail' type='text' placeholder='Введите email' tabIndex='0' />

          <MyTextInput label='Пароль' name='password' type='password' placeholder='Введите пароль' tabIndex='-1' />
          <div className={styles.buttonCont}>
            <div className={styles.widthCont}>
              <Button type='submit' title='Войти' className={styles.button} />
              <div className={styles.forgot} onClick={() => setForgotOpen(true)}>
                Забыли пароль?
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

AuthForm.propTypes = {
  setForgotOpen: PropTypes.func.isRequired,
};

export default AuthForm;
