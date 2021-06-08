import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from '../../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import CustomerDataInputs from '../../CustomerDataInputs/CustomerDataInputs';
import DeliveryDataInputs from '../../DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../../PaymentDataInputs/PaymentDataInputs';
import { cartTotalPriceSelector, getLocalCartSelector } from '../../../../store/cart/selectors';
import { generateLetterHtml } from '../../../../utils/generateHtml';
import Loader from '../../../../components/Loader/Loader';
import { getProductsSelector, productsLoadingSelector } from '../../../../store/products/selectors';
import { replace } from '../../../../utils/func';
import styles from './NewCustomer.module.scss';

const NewCustomer = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [commentAvailible, setCommentAvailible] = useState(false);
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);
  const localCart = useSelector(getLocalCartSelector);
  const totalPrice = replace(useSelector(cartTotalPriceSelector));

  if (productsLoading) {
    return <Loader />;
  }

  const productCartId = localCart.products.map(p => {
    return p.product;
  });

  const cart = products
    .map(p => {
      const { _id: id } = p;

      const cartQuantity = localCart.products
        .map(prod => {
          if (prod.product === id) {
            return prod.cartQuantity;
          }
          return null;
        })
        .filter(el => {
          return el != null;
        });

      if (productCartId.includes(id)) {
        return { product: p, cartQuantity: cartQuantity[0] };
      }
      return null;
    })
    .filter(el => {
      return el != null;
    });

  return (
    <div className={styles.tabContainer}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          mobile: '+380',
          email: '',
          region: '',
          city: '',
          delivery: '',
          address: '',
          paymentInfo: '',
          comment: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const letterHtml = generateLetterHtml(
            { products: cart },
            values,
            'https://i.ibb.co/GMbFyFv/logo.png',
            'http://localhost:3000/',
            totalPrice
          );

          const { delivery, region, city, address, ...ordersValue } = values;

          const deliveryAddress = { delivery, region, city, address };

          const letterSubject = 'Спасибо за заказ!';

          placeOrder({ ...ordersValue, deliveryAddress, letterHtml, letterSubject, products: cart })
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
