import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updatePassword } from '../../../../http/customersAPI';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UserPass = () => {
  const dispatch = useDispatch();

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
              dispatch(popupOpenOperation(res.data.message));
            })
            .catch(err => {
              const message = Object.values(err.data).join('');
              dispatch(popupOpenOperation(message, true));
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
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default UserPass;
