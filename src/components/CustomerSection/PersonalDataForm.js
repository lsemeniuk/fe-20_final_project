/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import Loader from '../Loader/Loader';
import style from './CustomerSection.module.scss';
import MyInput from './MyInput';
import schema from './schema';
import Button from '../Button/Button';
import { customerProfileSelector } from '../../store/customer/selectors';
import { loadCustomerProfile } from '../../store/customer/actions';
import store from '../../store/store';

function PersonalDataForm({ handleSubmit, isSubmitting }) {
  const customer = useSelector(customerProfileSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomerProfile());
  }, []);

  if (!customer || customer === null) return <Loader />;

  return (
    <div className={style.profile__content}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={style.grid__layout}>
          <label> Имя и Фамилия</label>
          <MyInput name='fullName' type='text' className={style.field} />
          <label> Эл. Почта</label>
          <MyInput name='email' type='text' className={style.field} />
          <label> Телефон</label>
          <MyInput name='phone' type='text' className={style.field} />
          <label> Город</label>
          <MyInput name='city' type='text' className={style.field} />
          <label> Адрес</label>
          <MyInput name='address' type='text' className={style.field} />
          <label> Пароль </label>
          <MyInput name='password' type='password' className={style.field} />
          <label> Еще раз пароль </label>
          <MyInput name='repeatPassword' type='password' className={style.field} />
        </div>
        <div>
          <Button disabled={isSubmitting} type='submit' title='Сохранить' className={style.btn__save} />
        </div>
      </form>
    </div>
  );
}
PersonalDataForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const saveCustomerInfo = (values, { setSubmitting }) => {
  console.log('Customer Info:', values);
  // console.log('helpers', helpers);
  setSubmitting(false);
};

console.log(store.getState().customer.data);

export default withFormik({
  mapPropsToValues: () => ({
    fullName: 'John Dow',
    email: 'jonn.d2000@gmail.com',
    phone: '+233 433 233',
    city: 'New York',
    address: '',
    password: '123456',
  }),
  handleSubmit: saveCustomerInfo,
  validationSchema: schema,
})(PersonalDataForm);
