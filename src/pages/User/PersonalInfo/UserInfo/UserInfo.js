/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { checkAuthOperation } from '../../../../store/customer/operations';
import { getCustomerIsLoadingSelector, getCustomerSelector } from '../../../../store/customer/selectors';
import Loader from '../../../../components/Loader/Loader';
import { editCustomerInfo } from '../../../../http/customersAPI';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';

const UserInfo = () => {
  const dispatch = useDispatch();
  const customer = useSelector(getCustomerSelector);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);
  const [messageServer, setmessageServer] = useState(null);

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  if (customerLoading) {
    return <Loader />;
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: customer.firstName || '',
          lastName: customer.lastName || '',
          login: customer.login || '',
          email: customer.email || '',
          telephone: customer.telephone || '+380',
          birthdate: customer.birthdate || '',
          city: customer.city || '',
          gender: customer.gender || '',
        }}
        validationSchema={Yup.object({
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
          telephone: Yup.string()
            .min(13, 'Слишком маленький')
            .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Некоректный номер телефона'),
          birthdate: Yup.string(),
          city: Yup.string(),
          gender: Yup.string().matches(/(Мужчина|Женщина)/, 'Определитесь кто вы, Мужчина либо Женщина'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newValues = {};
          for (const key in values) {
            if (values[key] !== '') {
              newValues[key] = values[key];
            }
          }

          editCustomerInfo(newValues)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Данные успешно сохранены</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='Имя' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
          <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='0' />
          <MyTextInput label='Логин' name='login' type='text' placeholder='Введите логин' tabIndex='0' />
          <MyTextInput label='Email' name='email' type='text' placeholder='Введите email' tabIndex='0' />
          <MyTextInput label='Телефон' name='telephone' type='tel' placeholder='+380 123 45 67 89' tabIndex='0' />
          <MyTextInput
            label='День рождения'
            name='birthdate'
            type='date'
            placeholder='Введите день рождения'
            tabIndex='0'
          />
          <MyTextInput label='Город' name='city' type='text' placeholder='Введите город' tabIndex='0' />
          <MySelect label='Пол' name='gender'>
            <option value=''>Выберите свой пол</option>
            <option value='Мужчина'>Мужчина</option>
            <option value='Женщина'>Женщина</option>
          </MySelect>

          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default UserInfo;