import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import MyTextArea from './MyTextArea';
import { addNewCommentOperation } from '../../../../../store/reviews/operations';
import Button from '../../../../../components/Button/Button';
import { getOneProductSelector } from '../../../../../store/products/selectors';

const CommentAddForm = () => {
  const dispatch = useDispatch();
  const { _id: productID } = useSelector(getOneProductSelector);
  const validationSchema = Yup.object({
    comments: Yup.string().required('Невозможно отправить пустой отзыв!'),
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
          <Form noValidate>
            <Field
              component={MyTextArea}
              name='comments'
              type='text'
              placeholder='Ваш отзыв'
              tabIndex='0'
              style={{ width: '430px', height: '100px', marginBottom: '20px', resize: 'none' }}
            />
            <div>
              <Button type='submit' title='Отправить' />
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default CommentAddForm;
