/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from './schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import styles from './NewCustomer.module.scss';
import MySelect from '../../../../components/Forms/MySelect/MySelect';

const NewCustomer = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('postDelivery');
  const [commentAvailible, setCommentAvailible] = useState(false);

  const quickFillCountry = country => {
    document.getElementById('city').value = country;
  };

  const createCitiesSpans = () => {
    const popularCities = ['Киев', 'Харьков', 'Днепр', 'Одесса', 'Львов'];
    return popularCities.map(city => (
      <span key={city} className={styles.cities} onClick={() => quickFillCountry(city)}>
        {city}
      </span>
    ));
  };

  const defineDeliveryOption = () => {
    setDeliveryMethod(document.getElementById('delivery').value);
  };

  const unblockComment = () => {
    setCommentAvailible(true);
  };

  return (
    <div className={styles.tabContainer}>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          city: '',
          email: '',
          delivery: '',
          payment: '',
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          placeOrder(values)
            .then(res => {
              if (res.status === 200) {
                setMessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
              }
            })
            .catch(err => {
              setMessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
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
          {!commentAvailible && (
            <button type='button' className={styles.comment} id='commentInvolver' onClick={unblockComment}>
              Добавить комментарий к заказу
            </button>
          )}
          {commentAvailible && (
            <div id='commentContainer'>
              <MyTextInput
                label='Комментарий'
                name='comment'
                type='text'
                placeholder='Введите комментарий'
                tabIndex='-1'
              />
            </div>
          )}
          <hr />
          <p className={styles.title}>Доставка</p>
          <MySelect label='Способ доставки' name='delivery' id='delivery' onClick={defineDeliveryOption}>
            <option value='postDelivery'>Новой почтой</option>
            <option value='courierDelivery'>Курьером по Киеву</option>
          </MySelect>

          {deliveryMethod === 'postDelivery' && (
            <MySelect label='Склад' name='postom' onClick={defineDeliveryOption}>
              <option value='Отделение № 1'>Отделение № 1</option>
              <option value='Отделение № 2'>Отделение № 2</option>
            </MySelect>
          )}
          {deliveryMethod === 'courierDelivery' && (
            <MyTextInput label='Адрес' name='address' type='text' placeholder='Введите адрес доставки' tabIndex='-1' />
          )}
          <hr />
          <p className={styles.title}>Оплата</p>
          <MySelect label='Способ оплаты' name='payment'>
            <option value='cash'>Наличными</option>
            <option value='cashOnDelivery'>Оплата при получении</option>
          </MySelect>
          <hr className={styles.lastHr} />
          <ButtonBlock buttonTitle='Оформить заказ' messageServer={messageServer} />
        </Form>
      </Formik>
    </div>
  );
};

export default NewCustomer;
