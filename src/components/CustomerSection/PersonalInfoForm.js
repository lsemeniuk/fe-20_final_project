/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import MyInput from './MyInput';
import schema from './schema';
import style from './CustomerSection.module.scss';

function PersonalInfoForm({ handleSubmit, isSubmitting }) {
  // console.log('formikForm2', props);

  return (
    <div className={style.profile__content}>
      <form onSubmit={handleSubmit} noValidate>
        <div className={style.grid__layout}>
          <label> Имя и Фамилия</label>
          <MyInput name='fullName' type='text' value='Smiling Dog' className={style.field} />
          <label> Эл. Почта</label>
          <MyInput name='email' type='text' value='a.kudr74@gmail.com' className={style.field} />
          <label> Телефон</label>
          <MyInput name='phone' type='text' value='+38 (033) 335-53-35' className={style.field} />
          <label> Город</label>
          <MyInput name='city' type='text' value='Киев' className={style.field} />
          <label> Адрес</label>
          <MyInput name='address' type='text' value='' className={style.field} />
          <label> Пароль </label>
          <MyInput name='password' type='password' value='**********' className={style.field} />
          <label> Еще раз пароль </label>
          <MyInput name='repeatPassword' type='password' className={style.field} />
        </div>
        <div>
          <button className={style.saveBtn} disabled={isSubmitting} type='submit'>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
PersonalInfoForm.propTypes = {
  isSubmitting: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
//* ========= КОНЕЦ КОМПОНЕНТА ================
//* функция placeOrder() - за пределами компонента checkOutForm()

const saveCustomerInfo = (values, { setSubmitting }) => {
  console.log('Customer Info:', values);
  // console.log('helpers', helpers);
  setSubmitting(false);
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    phone: '',
  }),
  handleSubmit: saveCustomerInfo,
  validationSchema: schema,
})(PersonalInfoForm);
