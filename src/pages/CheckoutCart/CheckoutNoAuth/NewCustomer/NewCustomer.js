import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { placeOrder } from '../../../../http/ordersAPI';
import schema from '../../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import CustomerDataInputs from '../../CustomerDataInputs/CustomerDataInputs';
import DeliveryDataInputs from '../../DeliveryDataInputs/DeliveryDataInputs';
import PaymentDataInputs from '../../PaymentDataInputs/PaymentDataInputs';
import { getLocalCartSelector } from '../../../../store/cart/selectors';
import Loader from '../../../../components/Loader/Loader';
import { getProductsSelector, productsLoadingSelector } from '../../../../store/products/selectors';
import styles from './NewCustomer.module.scss';
import { cartTotalPriceAction } from '../../../../store/cart/actions';
import { popupOpenOperation } from '../../../../store/modal/operations';
import { INDEX_ROUTE } from '../../../../utils/consts';

const NewCustomer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [commentAvailible, setCommentAvailible] = useState(false);
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);
  const localCart = useSelector(getLocalCartSelector);

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
          const { delivery, region, city, address, ...ordersValue } = values;

          const deliveryAddress = { delivery, region, city, address };

          const status = 'processed';

          placeOrder({ ...ordersValue, deliveryAddress, products: cart, status })
            .then(res => {
              if (res.status === 200) {
                dispatch(
                  popupOpenOperation('Заказ успешно оформлен!', false, () => {
                    history.push(INDEX_ROUTE);
                  })
                );
                localStorage.setItem('cart', JSON.stringify({ products: [] }));
                dispatch(cartTotalPriceAction(0));
              }
            })
            .catch(err => {
              const message = Object.values(err.data).join('');
              dispatch(popupOpenOperation(message, true));
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
              <MyTextInput
                label='Комментарий'
                name='comment'
                type='text'
                placeholder='Введите комментарий'
                tabIndex='-1'
              />
            )}
          </div>
          <ButtonBlock buttonTitle='Оформить заказ' />
        </Form>
      </Formik>
    </div>
  );
};

export default NewCustomer;
