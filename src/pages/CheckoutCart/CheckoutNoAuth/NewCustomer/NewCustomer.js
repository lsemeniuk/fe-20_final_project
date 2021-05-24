/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from './schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import styles from './NewCustomer.module.scss';

const NewCustomer = () => {
  const [messageServer, setmessageServer] = useState(null);

  const quickFillCountry = country => {
    document.getElementById('city').value = country;
  };

  const createCitiesSpans = () => {
    const popularCities = ['Киев', 'Харьков', 'Днепр', 'Одесса', 'Львов'];
    return popularCities.map(city => (
      <span className={styles.cities} onClick={() => quickFillCountry(city)}>
        {city}
      </span>
    ));
  };

  const ublockComment = () => {
    document.getElementById('commentContainer').className = '{styles.commentShowedContainer}';
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          city: '',
          email: '',
          delivery: '',
          payment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          placeOrder(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <div className={styles.container}>
            <p className={styles.title}>Получатель заказа</p>
            <MyTextInput
              label='ФИО'
              name='name'
              type='text'
              placeholder='Введите фамилию, имя и отчество'
              tabIndex='-1'
            />
            <MyTextInput label='Телефон' name='phone' type='tel' placeholder='Введите номер телефона' tabIndex='-1' />
            <MyTextInput
              id='city'
              label='Город'
              name='city'
              type='text'
              placeholder='Введите название своего города'
              tabIndex='-1'
            />
            <div className={styles.citiesBlock}>
              <span className={styles.citiesTitle}>Например:&nbsp;</span>
              {createCitiesSpans()}
            </div>
            <MyTextInput label='Эл. почта' name='email' type='tel' placeholder='Введите номер телефона' tabIndex='-1' />
            <button type='button' className={styles.comment} onClick={ublockComment}>
              Добавить комментарий к заказу
            </button>
            <div id='commentContainer' className={styles.commentContainer}>
              <MyTextInput
                label='Комментарий'
                name='comment'
                type='text'
                placeholder='Введите комментарий'
                tabIndex='-1'
              />
            </div>
          </div>
          <ButtonBlock buttonTitle='Оформить заказ' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default NewCustomer;
