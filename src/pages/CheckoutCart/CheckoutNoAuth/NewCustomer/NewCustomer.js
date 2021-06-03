import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from '../../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import CustomerDataInputs from '../../CustomerDataInputs/CustomerDataInputs';
import DeliveryDataInputs from '../../DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../../PaymentDataInputs/PaymentDataInputs';
import styles from './NewCustomer.module.scss';

const NewCustomer = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [commentAvailible, setCommentAvailible] = useState(false);

  return (
    <div className={styles.tabContainer}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
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
          <CustomerDataInputs />
          <DeliveryDataInputs />
          <PaymentDataInputs />
          <div className={styles.addComment}>
            {!commentAvailible && (
              <span
                type='button'
                className={styles.comment}
                id='commentInvolver'
                onClick={() => {
                  setCommentAvailible(true);
                }}
              >
                Добавить комментарий к заказу
              </span>
            )}
            {commentAvailible && (
              <MyTextInput
                label='Комментарий'
                name='comment'
                type='text'
                placeholder='Введите комментарий'
                tabIndex='-1'
              />
            )}
          </div>
          <ButtonBlock buttonTitle='Оформить заказ' messageServer={messageServer} />
        </Form>
      </Formik>
    </div>
  );
};

export default NewCustomer;
