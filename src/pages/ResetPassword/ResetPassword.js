import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import MyTextInput from '../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../components/Forms/ButtonBlock/ButtonBlock';
import styles from './ResetPassword.module.scss';
import { resetPassword } from '../../http/customersAPI';
import { popupOpenOperation } from '../../store/modal/operations';

const ResetPassword = () => {
  const dispatch = useDispatch();
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
                dispatch(popupOpenOperation(res.data.message));
              })
              .catch(err => {
                const message = Object.values(err.data).join('');
                dispatch(popupOpenOperation(message, true));
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
              <ButtonBlock buttonTitle='Изменить' />
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
