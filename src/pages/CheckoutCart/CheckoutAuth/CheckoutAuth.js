/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
// import { placeOrder } from '../../../http/ordersAPI';
import schema from '../schema';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import CustomerDataInputs from '../CustomerDataInputs/CustomerDataInputs';
import DeliveryDataInputs from '../DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../PaymentDataInputs/PaymentDataInputs';
import { getCustomerIsLoadingSelector, getCustomerSelector } from '../../../store/customer/selectors';
import Loader from '../../../components/Loader/Loader';
import { generateLetterHtml } from '../../../utils/func';
import styles from './CheckoutAuth.module.scss';
import { cartTotalPriceSelector, getCartSelector } from '../../../store/cart/selectors';

const CheckoutAuth = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [commentAvailible, setCommentAvailible] = useState(false);
  const [htmlString, setHtmlString] = useState(null);
  const customer = useSelector(getCustomerSelector);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);
  const cart = useSelector(getCartSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);

  if (customerLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.tabContainer}>
      <Formik
        initialValues={{
          firstName: customer.firstName || '',
          lastName: customer.lastName || '',
          phone: customer.telephone || '+380',
          email: customer.email || '',
          city: customer.city || '',
          delivery: '',
          payment: '',
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setHtmlString(
            generateLetterHtml(cart, values, 'https://i.ibb.co/GMbFyFv/logo.png', 'http://localhost:3000/', totalPrice)
          );
          setMessageServer('');
          // placeOrder(values)
          //   .then(res => {
          //     if (res.status === 200) {
          //       setMessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
          //     }
          //   })
          //   .catch(err => {
          //     setMessageServer(<span>{Object.values(err.data).join('')}</span>);
          //   });
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
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};

export default CheckoutAuth;
