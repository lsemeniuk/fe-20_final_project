import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CommentUpdateForm from '../CommentForms/CommentUpdateForm';
import { deleteCommentOperation } from '../../../../../store/reviews/operations';
import styles from './Comment.module.scss';
import { getCustomerSelector } from '../../../../../store/customer/selectors';
import Icons from '../../../../../components/Icons/Icons';
import { getDate } from '../../../../../utils/func';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const { id: customerId } = useSelector(getCustomerSelector);
  const { _id: commentCustomerId } = comment.customer;
  const { _id: commentId } = comment;
  const handleDelete = deleteID => dispatch(deleteCommentOperation(deleteID));
  const handleUpdate = () => setShowUpdateForm(true);
  return (
    <li className={styles.comment}>
      <div className={styles.name__date}>
        <div className={styles.customer}>
          {comment.customer.firstName} {comment.customer.lastName}
        </div>
        <div className={styles.date}>{getDate(comment.date)}</div>
      </div>
      <div className={styles.row}>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
        <p className={styles.commentText}>{comment.content}</p>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
      </div>
      {customerId === commentCustomerId && (
        <button type='button' onClick={() => handleDelete(commentId)} className={styles.up}>
          Удалить
        </button>
      )}
      {customerId === commentCustomerId && !showUpdateForm && (
        <button type='button' onClick={handleUpdate} className={styles.slide}>
          Изменить
        </button>
      )}
      {showUpdateForm && <CommentUpdateForm commentID={commentId} setShowUpdateForm={setShowUpdateForm} />}
    </li>
  );
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
export default Comment;
