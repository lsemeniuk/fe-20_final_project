import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updatePassword } from '../../../../http/customersAPI';

const UserPass = () => {
  const [messageServer, setmessageServer] = useState(null);

  const validationSchema = Yup.object({
    password: Yup.string().required('Необходимо ввести предидущий пароль'),
    newPassword: Yup.string()
      .min(7, 'Минимальное количество символов - 7')
      .max(30, 'Возможно не больше 30 символов')
      .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
      .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
      .required('Укажите Ваш пароль'),
    confirmPassword: Yup.string()
      .required('Подтвердите Ваш пароль')
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают'),
  });

  return (
    <>
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { password, newPassword } = values;

          updatePassword({ password, newPassword })
            .then(res => {
              setmessageServer(<span style={{ color: 'green' }}>{res.data.message}</span>);
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
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
            <MyTextInput
              label='Повторите пароль*'
              name='confirmPassword'
              type='password'
              placeholder='Подтвердите пароль'
              tabIndex='0'
            />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default UserPass;
