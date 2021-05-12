import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updatePassword } from '../../../../http/customersAPI';

const UserPass = () => {
  const [messageServer, setmessageServer] = useState(null);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(7, 'Это шликом маленький пароль')
      .max(20, 'Такой пароль невозможно запомнить')
      .required('Необходимо ввести пароль'),
    newPassword: Yup.string()
      .min(7, 'Это шликом маленький пароль')
      .max(30, 'Такой пароль невозможно запомнить')
      .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
      .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
      .required('Необходимо ввести пароль'),
  });

  return (
    <>
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          updatePassword(values)
            .then(res => {
              setmessageServer(<span style={{ color: 'green' }}>{res.data.message}</span>);
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label='Текущий пароль'
            name='password'
            type='password'
            placeholder='Текущий пароль'
            tabIndex='0'
          />
          <MyTextInput
            label='Новый пароль'
            name='newPassword'
            type='password'
            placeholder='Новый пароль'
            tabIndex='0'
          />
          <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default UserPass;
