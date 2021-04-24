/* eslint-disable no-fallthrough */
import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import MyInput from './MyInput';
import schema from './schema';
import MyText from './MyText';
import Button from '../../Button/Button';
import styles from './ReviewForm.module.scss';
import Rating from '../../Rating/Rating';

function ReviewForm({ handleSubmit, isSubmitting }) {
  // console.log('formikForm2', props);

  return (
    <form onSubmit={handleSubmit} className={styles.review__form} noValidate>
      <MyInput name='firstName' type='text' placeholder='Имя и фамилия' />
      <MyInput name='email' type='text' placeholder='Эл.почта' />
      <MyText name='comment' type='text' placeholder='Сообщение' />
      <div className={styles.spaces}>
        <span> Оцените товар </span>
        <Rating />
      </div>
      <div>
        <Button title='Отправить' disabled={isSubmitting} type='submit' />
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

const placeOrder = (values, { setSubmitting }) => {
  console.log('Customer Info:', values);
  // console.log('helpers', helpers);
  setSubmitting(false);
  // logOrder();
};

export default withFormik({
  mapPropsToValues: () => ({
    firstLastName: '',
    email: '',
    review: '',
  }),
  handleSubmit: placeOrder,
  validationSchema: schema,
})(ReviewForm);
