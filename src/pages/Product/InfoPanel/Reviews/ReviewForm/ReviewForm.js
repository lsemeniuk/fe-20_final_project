import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addComment, updateComment } from '../../../../../http/commentAPI';
import Button from '../../../../../components/Button/Button';
import styles from './ReviewForm.module.scss';

const ReviewForm = ({ review, productId, updateReview, reviewId, setRefreshReviews }) => {
  const [messageServer, setmessageServer] = useState(null);

  const validationSchema = Yup.object({
    content: Yup.string().min(10, 'Укажите отзыв длиннее 10 символов').required('Оставьте свой отзыв о товаре'),
  });

  return (
    <>
      <Formik
        initialValues={{
          content: review?.content || '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (updateReview) {
            updateComment(reviewId, values, setRefreshReviews)
              .then(res => {
                if (res.status === 200) {
                  setmessageServer(<span style={{ color: 'green' }}>Отзыв успешно изменён!</span>);
                }
              })
              .catch(err => {
                setmessageServer(<span>{Object.values(err.data).join('')}</span>);
              });
          } else {
            addComment({ product: productId, ...values }, setRefreshReviews)
              .then(res => {
                if (res.status === 200) {
                  setmessageServer(<span style={{ color: 'green' }}>Отзыв успешно добавлен!</span>);
                }
              })
              .catch(err => {
                setmessageServer(<span>{Object.values(err.data).join('')}</span>);
              });
          }

          resetForm({});
          setSubmitting(false);
        }}
      >
        <div>
          <Form>
            <div className={styles.textareaContainer}>
              <Field
                as='textarea'
                className={!updateReview ? styles.textarea : styles.textareaUpdate}
                name='content'
                placeholder='Введите Ваш отзыв'
                rows={!updateReview ? 5 : 3}
              />
            </div>
            {updateReview ? (
              <div className={styles.buttonBlock}>
                <Button type='submit' title='Изменить' />
                <div className={styles.redTitle}>{messageServer}</div>
              </div>
            ) : (
              <div className={styles.buttonBlock}>
                <Button type='submit' title='Добавить' />
                <div className={styles.errorMessage}>
                  <ErrorMessage
                    name='content'
                    render={msg => {
                      setmessageServer(null);
                      return <div>{msg}</div>;
                    }}
                  />
                </div>
                <div className={styles.redTitle}>{messageServer}</div>
              </div>
            )}
          </Form>
        </div>
      </Formik>
    </>
  );
};

ReviewForm.propTypes = {
  review: PropTypes.object,
  productId: PropTypes.string,
  updateReview: PropTypes.bool,
  reviewId: PropTypes.string,
  setRefreshReviews: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
  review: {},
  productId: '',
  updateReview: false,
  reviewId: '',
};

export default ReviewForm;
