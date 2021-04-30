/* eslint-disable no-alert */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../Forms/MyTextInput/MyTextInput';
import Button from '../../../Button/Button';

const AuthForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        validationSchema={Yup.object({
          loginOrEmail: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput label='Логин или email' name='loginOrEmail' type='text' placeholder='Введите логин или email' />

          <MyTextInput label='Пароль' name='lastName' type='password' placeholder='Введите пароль' />

          <Button type='submit' title='Войти' />
        </Form>
      </Formik>
    </>
  );
};

export default AuthForm;
