import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../http/ordersAPI';
import CustomerDataInputs from '../CustomerDataInputs/CustomerDataInputs';
import DeliveryDataInputs from '../DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../PaymentDataInputs/PaymentDataInputs';
import { getCustomerIsLoadingSelector, getCustomerSelector } from '../../../store/customer/selectors';
import Loader from '../../../components/Loader/Loader';
import schema from '../schema';
import styles from './CheckoutAuth.module.scss';

const CheckoutAuth = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [commentAvailible, setCommentAvailible] = useState(false);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);
  const customer = useSelector(getCustomerSelector);

  const { _id: id } = customer;

  if (customerLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.tabContainer}>
      <Formik
        initialValues={{
          firstName: customer.firstName || '',
          lastName: customer.lastName || '',
          mobile: customer.telephone || '+380',
          email: customer.email || '',
          region: '',
          city: '',
          delivery: '',
          address: '',
          paymentInfo: '',
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const { delivery, region, city, address, ...ordersValue } = values;
          const deliveryAddress = { delivery, region, city, address };

          const status = 'processed';

          placeOrder({ ...ordersValue, deliveryAddress, customerId: id, status })
            .then(res => {
              if (res.status === 200) {
                if (res.data.message) {
                  setMessageServer(<span>{res.data.message}</span>);
                } else {
                  setMessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
                }
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
          <h3 className='checkout__title'>Доставка</h3>
          <DeliveryDataInputs />
          <hr />
          <h3 className='checkout__title'>Оплата</h3>
          <PaymentDataInputs />
          <hr />
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
            )}
          </div>
          <ButtonBlock buttonTitle='Оформить заказ' messageServer={messageServer} />
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutAuth;
