/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Button from '../../../../components/Button/Button';
import MyTextArea from './MyTextArea';
import { getOneProductSelector } from '../../../../store/products/selectors';
import { addNewCommentOperation } from '../../../../store/reviews/operations';

const ReviewsForm = () => {
  const dispatch = useDispatch();
  const productID = useSelector(getOneProductSelector)._id;
  const validationSchema = Yup.object({
    comments: Yup.string(),
  });

  return (
    <>
      <Formik
        initialValues={{
          comments: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const newComment = {
            product: productID,
            content: values.comments,
          };
          dispatch(addNewCommentOperation(newComment));
          resetForm({});
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <Field component={MyTextArea} name='comments' type='text' placeholder='Ваш отзыв' tabIndex='0' />
            <div>
              <Button type='submit' title='Отправить' />
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default ReviewsForm;
