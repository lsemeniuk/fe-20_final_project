import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import MyInput from './MyInput';
import schema from './schema';
import MyText from './MyText';
import Button from '../../Button/Button';
import './ReviewForm.scss';

function ReviewForm({ handleSubmit, isSubmitting }) {
  // console.log('formikForm2', props);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className='section__title'>Новый отзыв или комментарий</h3>
      <MyInput name='firstName' type='text' placeholder='Имя Фамилия' />
      <MyInput name='email' type='text' placeholder='email' />
      <MyText name='comment' type='text' placeholder='Ваши комментарии' />
      <div>
        <Button title='Отправить отзыв' disabled={isSubmitting} type='submit' />
      </div>
    </form>
  );
}
// *========= КОНЕЦ КОМПОНЕНТА ================
// * функция placeOrder() - за пределами компонента checkOutForm()
// const logOrder = arr => {
//   console.log('Your order:');
//   arr.forEach(item => {
//     console.log(`item: ${item.title}, quantity: ${item.qty}`);
//   });
// };
ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.func.isRequired,
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
