import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../components/Forms/MyTextInput/MyTextInput';
import Button from '../../components/Button/Button';
// import { createCustomerOperation } from '../../../../store/customer/operations';
import styles from './CheckoutCart.module.scss';

const CheckoutCart = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <div className={styles.formsContainer}>
        <Formik
          initialValues={{
            fio: '',
            phone: '',
            city: '',
            comment: '',
            address: '',
          }}
          validationSchema={Yup.object({
            fio: Yup.string()
              .min(6, 'Введите полное имя, фамилию, отчество')
              .max(30, 'Неповерю что Вас так зовут')
              .required('Укажите Ваше имя, фамилию, отчество'),
            phone: Yup.string()
              .min(10, 'Укажите телефон в формате +38 (000) 000-00-00')
              .max(19, 'укажите телефон в формате +38 (000) 000-00-00')
              .required('Укажите Ваш телефон'),
            city: Yup.string()
              .min(2, 'Придумайте что-нибудь длиннее')
              .max(18, 'Слишком много смволов')
              .required('Укажите Ваш город'),
          })}
          // onSubmit={(values, { setSubmitting }) => {
          //   const { firstName, lastName, login, email, password } = values;
          //   dispatch(createCustomerOperation({ setTabIndex, firstName, lastName, login, email, password }));
          //   setSubmitting(false);
          // }}
        >
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.underlineBlock}>
                <div className={styles.inputsContainer}>
                  <div className={styles.formTitle}>Получатель заказа</div>
                  <div className={styles.formItem}>
                    <label className={styles.label}>ФИО</label>
                    <MyTextInput className={styles.input} name='fio' type='text' />
                  </div>
                  <div className={styles.formItem}>
                    <label className={styles.label}>Телефон</label>
                    <MyTextInput className={styles.input} name='phone' type='text' />
                  </div>
                  <div className={styles.formItem}>
                    <label className={styles.label}>Город</label>
                    <MyTextInput className={styles.input} name='city' type='text' />
                  </div>
                  <div className={styles.citiesBlock}>
                    <span className={styles.citiesTitle}>Например:&nbsp;</span>
                    <span className={styles.cities}>Киев&nbsp;</span>
                    <span className={styles.cities}>Харьков&nbsp;</span>
                    <span className={styles.cities}>Днепр&nbsp;</span>
                    <span className={styles.cities}>Одесса&nbsp;</span>
                    <span className={styles.cities}>Львов&nbsp;</span>
                  </div>
                  <div className={styles.addComment}>Добавить комментрий к заказу</div>
                  <div className={`${styles.formItem} ${styles.commentBlock}`}>
                    <label className={styles.label}>Комментарий</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} name='textarea' type='textarea' />
                  </div>
                </div>
              </div>
              <div className={styles.underlineBlock}>
                <div className={styles.inputsContainer}>
                  <div className={styles.formItem}>
                    <div className={styles.deliveryLabel}>Доставка</div>
                    <select className={styles.deliveryList} name='delivery'>
                      <option className={styles.deliveryItem}>Курьером по Киеву</option>
                      <option className={styles.deliveryItem}>Новой Почтой по Украине</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.underlineBlock}>
                <div className={styles.inputsContainer}>
                  <div className={styles.formItem}>
                    <div className={styles.deliveryLabel}>Оплата</div>
                    <select className={styles.deliveryList} name='delivery'>
                      <option className={styles.deliveryItem}>Безналичный расчет</option>
                      <option className={styles.deliveryItem}>Наличный расчет</option>
                      <option className={styles.deliveryItem}>На карту</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
        <div className={styles.cartContainer}>
          <div>cartContainer</div>
        </div>
      </div>
      <div className={styles.buttonCont}>
        <div className={styles.widthCont}>
          <Button type='submit' title='Оформить заказ' className={styles.button} />
        </div>
      </div>
    </section>
  );
};

export default CheckoutCart;
