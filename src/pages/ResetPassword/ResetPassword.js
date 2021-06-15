import React, { useState } from 'react';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import MyTextInput from '../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../components/Forms/ButtonBlock/ButtonBlock';
import styles from './ResetPassword.module.scss';
import { resetPassword } from '../../http/customersAPI';

const ResetPassword = () => {
  const [messageServer, setmessageServer] = useState(null);
  const { token } = useParams();

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(7, 'Минимальное количество символов - 7')
      .max(30, 'Возможно не больше 30 символов')
      .matches('(?=.*[0-9])', 'Должен содержать хотя бы одно число')
      .matches('(?=.*[A-Z])', 'Добавьте латинскую букву в верхнем регистре')
      .required('Укажите новый пароль'),
    confirmPassword: Yup.string()
      .required('Подтвердите новый пароль')
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают'),
  });
  return (
    <div className={styles.containerPage}>
      <div className={styles.container}>
        <Formik
          initialValues={{
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const { newPassword } = values;
            resetPassword(token, { newPassword })
              .then(res => {
                setmessageServer(<span style={{ color: 'green' }}>{res.data.message}</span>);
              })
              .catch(err => {
                setmessageServer(<span>{Object.values(err.data).join('')}</span>);
              });
            setSubmitting(false);
          }}
        >
          <div className={styles.formContainer}>
            <Form>
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
      </div>
    </div>
  );
};

export default ResetPassword;
