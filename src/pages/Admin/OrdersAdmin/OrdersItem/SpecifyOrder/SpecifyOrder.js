/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import schema from './schema';
import { updateOrder } from '../../../../../http/ordersAPI';
import ButtonBlock from '../../../../../components/Forms/ButtonBlock/ButtonBlock';
import DeliveryDataInputs from '../../../../CheckoutCart/DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../../../../CheckoutCart/PaymentDataInputs/PaymentDataInputs';
import styles from './SpecifyOrder.module.scss';
import { generateLetterHtml } from '../../../../../utils/generateHtml';
import { replace } from '../../../../../utils/func';

const SpecifyOrder = ({ orderId, order, setspecifyOrderState, setOrderState }) => {
  const [messageServer, setMessageServer] = useState(null);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          region: '',
          city: '',
          delivery: '',
          address: '',
          paymentInfo: '',
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const totalPrice = replace(order.totalSum);
          const letterHtml = generateLetterHtml(
            order,
            { ...order, ...values },
            'https://i.ibb.co/GMbFyFv/logo.png',
            'http://localhost:3000/',
            totalPrice
          );

          const { delivery, region, city, address, ...ordersValue } = values;
          const deliveryAddress = { delivery, region, city, address };

          const letterSubject = 'Ваш заказ уточнён!';
          const status = 'processed';

          updateOrder(orderId, {
            ...ordersValue,
            deliveryAddress,
            letterSubject,
            letterHtml,
            email: order.email,
            status,
          })
            .then(res => {
              if (res.status === 200) {
                setMessageServer(<span style={{ color: 'green' }}>Заказ успешно уточнён!</span>);
                setspecifyOrderState(false);
                setOrderState(res.data.order);
              }
            })
            .catch(err => {
              setMessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <Form>
          <DeliveryDataInputs />
          <PaymentDataInputs />

          <div className={styles.textareaContainer}>
            <label className={styles.label}>Комментарий</label>
            <Field
              as='textarea'
              className={styles.textarea}
              name='comment'
              placeholder='Введите комментарий'
              rows={5}
            />
          </div>
          <ButtonBlock buttonTitle='Уточнить заказ' messageServer={messageServer} />
        </Form>
      </Formik>
    </div>
  );
};

SpecifyOrder.propTypes = {
  orderId: PropTypes.string.isRequired,
  order: PropTypes.object.isRequired,
  setspecifyOrderState: PropTypes.func.isRequired,
  setOrderState: PropTypes.func.isRequired,
};

export default SpecifyOrder;