/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Button from '../../../../components/Button/Button';
import MyTextArea from './MyTextArea';
import { updateCommentOperation } from '../../../../store/reviews/operations';

const CommentUpdateForm = ({ commentID, setShowUpdateForm }) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    comments: Yup.string().min(5, 'Минимум 5 символов'),
  });

  return (
    <>
      <Formik
        initialValues={{
          comments: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const updatedComment = {
            content: values.comments,
          };
          dispatch(updateCommentOperation(commentID, updatedComment));
          resetForm({});
          setSubmitting(false);
          setShowUpdateForm(false);
        }}
      >
        <div className='page_form'>
          <Form noValidate>
            <Field component={MyTextArea} name='comments' type='text' placeholder='Изменить отзыв' tabIndex='0' />
            <div>
              <Button type='submit' title='Отправить' />
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};
CommentUpdateForm.propTypes = {
  commentID: PropTypes.string.isRequired,
  setShowUpdateForm: PropTypes.func.isRequired,
};
export default CommentUpdateForm;
