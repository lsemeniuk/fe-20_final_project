/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { getAllCommentsOperation } from '../../../../store/reviews/operations';
import Comment from './Comment/Comment';
import CommentAddForm from './CommentForms/CommentAddForm';
import CommentsFilter from './CommentsFilter/CommentsFilter';
import styles from './Reviews.module.scss';

const Reviews = () => {
  const { isLoading, data } = useSelector(state => state.comments);
  const customerData = useSelector(state => state.customer);
  const { isAuth } = customerData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommentsOperation());
  }, [customerData]);

  const commentsList = data.map(c => <Comment key={c._id} comment={c} />);
  return (
    <>
      {isAuth ? (
        <CommentAddForm />
      ) : (
        <p className={styles.comments__container}>Пож-та, войдите/зарегистрируйтесь, чтобы оставить отзыв</p>
      )}
      {isAuth && <CommentsFilter />}
      {isLoading ? <Loader /> : <ul className={styles.comments__container}>{commentsList}</ul>}
    </>
  );
};
export default Reviews;
