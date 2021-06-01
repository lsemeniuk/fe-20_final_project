/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteCommentOperation } from '../../../../store/reviews/operations';
import styles from './Comment.module.scss';
import CommentUpdateForm from './CommentUpdateForm';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleDelete = deleteID => dispatch(deleteCommentOperation(deleteID));
  const handleUpdate = () => setShowUpdateForm(true);
  return (
    <li className={styles.comment}>
      <div className={styles.customer}>{comment.customer.login}</div>
      <p>{comment.content}</p>
      <button type='button' onClick={() => handleDelete(comment._id)} className={styles.deleteBtn}>
        Удалить
      </button>
      {!showUpdateForm && (
        <button type='button' onClick={handleUpdate} className={styles.updateBtn}>
          Изменить
        </button>
      )}
      {showUpdateForm && <CommentUpdateForm commentID={comment._id} setShowUpdateForm={setShowUpdateForm} />}
    </li>
  );
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
export default Comment;
