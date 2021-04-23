/* eslint-disable no-fallthrough */
import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import MyInput from './MyInput';
import schema from './schema';
import MyText from './MyText';
import Button from '../../Button/Button';
import styles from './ReviewForm.module.scss';

function ReviewForm({ handleSubmit, isSubmitting }) {
  // console.log('formikForm2', props);
  const [clicked, setClicked] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });
  const handleStarClick = starNum => {
    switch (starNum) {
      case 'star5':
        setClicked({ star5: true, star4: true, star3: true, star2: true, star1: true });
        break;
      case 'star4':
        setClicked({ star5: false, star4: true, star3: true, star2: true, star1: true });
        break;
      case 'star3':
        setClicked({ star5: false, star4: false, star3: true, star2: true, star1: true });
        break;
      case 'star2':
        setClicked({ star5: false, star4: false, star3: false, star2: true, star1: true });
        break;
      default:
        setClicked({ star5: false, star4: false, star3: false, star2: false, star1: true });
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.review__form} noValidate>
      <MyInput name='firstName' type='text' placeholder='Имя и фамилия' />
      <MyInput name='email' type='text' placeholder='Эл.почта' />
      <MyText name='comment' type='text' placeholder='Сообщение' />
      <div className={styles.spaces}>
        <span> Оцените товар </span>
        <span>
          {!clicked.star1 ? (
            <AiOutlineStar size='2rem' onClick={() => handleStarClick('star1')} />
          ) : (
            <AiFillStar size='2rem' onClick={() => handleStarClick('star1')} />
          )}
          {!clicked.star2 ? (
            <AiOutlineStar size='2rem' onClick={() => handleStarClick('star2')} />
          ) : (
            <AiFillStar size='2rem' onClick={() => handleStarClick('star2')} />
          )}
          {!clicked.star3 ? (
            <AiOutlineStar size='2rem' onClick={() => handleStarClick('star3')} />
          ) : (
            <AiFillStar size='2rem' onClick={() => handleStarClick('star3')} />
          )}
          {!clicked.star4 ? (
            <AiOutlineStar size='2rem' onClick={() => handleStarClick('star4')} />
          ) : (
            <AiFillStar size='2rem' onClick={() => handleStarClick('star4')} />
          )}
          {!clicked.star5 ? (
            <AiOutlineStar size='2rem' onClick={() => handleStarClick('star5')} />
          ) : (
            <AiFillStar size='2rem' onClick={() => handleStarClick('star5')} />
          )}
        </span>
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
