/* eslint-disable dot-notation */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { getCustomerSelector } from '../../store/customer/selectors';
import MyTextInput from '../Forms/MyTextInput/MyTextInput';
import { placeOrder } from '../../http/ordersAPI';
import { generateLetterHtml } from '../../utils/generateHtml';
import styles from './QuickOrderForm.module.scss';

const QuickOrderForm = ({ product, setQuickOrderOpen }) => {
  const [messageServer, setMessageServer] = useState(null);
  const customer = useSelector(getCustomerSelector);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Это шликом маленькое имя')
      .max(25, 'Неповерю что Вас так зовут')
      .required('Укажите Ваше имя'),
    lastName: Yup.string()
      .min(2, 'Извените, этого маловато для фамилии')
      .max(25, 'Возможно немного сократить?')
      .required('Укажите Вашу фамилию'),
    mobile: Yup.string()
      .min(13, 'Слишком маленький')
      .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Некорректный номер телефона'),
    email: Yup.string().email('Неверный адрес email').required('Укажите email'),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: customer.firstName || '',
          lastName: customer.lastName || '',
          mobile: customer.telephone || '',
          email: customer.email || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const products = [{ product, cartQuantity: 1 }];
          const status = 'specified';
          const letterSubject = 'Быстрый заказ успешно оформлен!';
          const letterHtml = generateLetterHtml(
            { products },
            values,
            'https://i.ibb.co/GMbFyFv/logo.png',
            'http://localhost:3000/',
            product.currentPrice
          );

          placeOrder({ ...values, products, letterHtml, letterSubject, status })
            .then(res => {
              if (res.status === 200) {
                if (res.data.message) {
                  setMessageServer(<span>{res.data.message}</span>);
                } else {
                  setMessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
                }
                setQuickOrderOpen(false);
              }
            })
            .catch(err => {
              setMessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <Form>
          <div className={styles.messageServer}>{messageServer}</div>
          <MyTextInput label='Имя' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
          <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='0' />
          <MyTextInput label='Телефон' name='mobile' type='text' placeholder='Введите номер телефона' tabIndex='0' />
          <MyTextInput label='Email' name='email' type='text' placeholder='Введите email' tabIndex='0' />

          <div className={styles.buttonCont}>
            <div className={styles.widthCont}>
              <Button type='submit' title='Оформить заказ' className={styles.button} />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

QuickOrderForm.propTypes = {
  product: PropTypes.object.isRequired,
  setQuickOrderOpen: PropTypes.func.isRequired,
};

export default QuickOrderForm;
