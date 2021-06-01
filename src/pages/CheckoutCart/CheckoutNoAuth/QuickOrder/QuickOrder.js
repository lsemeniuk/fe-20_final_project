import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from './schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import styles from './QuickOrder.module.scss';

const QuickOrder = () => {
  const [messageServer, setMessageServer] = useState(null);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
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
        <div className={styles.tabContainer}>
          <p className={styles.title}>Получатель заказа</p>
          <MyTextInput
            label='ФИО'
            name='name'
            type='text'
            placeholder='Введите фамилию, имя и отчество'
            tabIndex='-1'
          />
          <MyTextInput label='Эл. почта' name='email' type='tel' placeholder='Введите номер телефона' tabIndex='-1' />
          <MyTextInput label='Телефон' name='phone' type='tel' placeholder='Введите номер телефона' tabIndex='-1' />
          <hr className={styles.lastHr} />
          <ButtonBlock buttonTitle='Оформить заказ' messageServer={messageServer} />
        </div>
      </Form>
    </Formik>
  );
};
export default QuickOrder;
