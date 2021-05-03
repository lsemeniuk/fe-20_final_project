/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withFormik } from 'formik';
import Loader from '../../components/Loader/Loader';
import style from './CustomerSection.module.scss';
import MyInput from './MyInput';
import schema from './schema';
import Button from '../../components/Button/Button';
import { customerProfileSelector, isLoadingSelector } from '../../store/customer/selectors';
import { loadCustomerProfile } from '../../store/customer/actions';

function PersonalDataForm({ handleSubmit, isSubmitting }) {
  const customer = useSelector(customerProfileSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomerProfile());
    if (customer) {
      localStorage.setItem('customer', JSON.stringify(customer));
    }
    // localStorage.clear();
  }, []);

  if (isLoading) return <Loader />;

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
          <label> Пароль еще раз </label>
          <MyInput name='repeatPassword' type='password' className={style.field} />
        </div>
        <div className={style.btn__pos}>
          <Button type='submit' disabled={isSubmitting} title='Сохранить' />
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
const customerLocal = JSON.parse(localStorage.getItem('customer'));

export default withFormik({
  mapPropsToValues: () => ({
    fullName: customerLocal ? customerLocal.fullName : '',
    email: customerLocal ? customerLocal.email : '',
    phone: customerLocal ? customerLocal.phone : '',
    city: customerLocal ? customerLocal.city : '',
    address: customerLocal ? customerLocal.address : '',
    password: customerLocal ? customerLocal.password : '',
  }),
  handleSubmit: saveCustomerInfo,
  validationSchema: schema,
})(PersonalDataForm);
