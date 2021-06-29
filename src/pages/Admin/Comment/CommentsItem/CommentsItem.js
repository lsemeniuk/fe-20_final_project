import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteComment } from '../../../../http/commentAPI';
import styles from './CommentsItem.module.scss';
import UpdateCommentsForm from '../UpdateCommentsForm/UpdateCommentsForm';
import { popupOpenOperation } from '../../../../store/modal/operations';

const CommentsItem = ({ comment, setRefreshComments }) => {
  const dispatch = useDispatch();

  const { _id: id } = comment;
  const [openForm, setOpenForm] = useState(false);

  const deleteCommentFunc = () => {
    deleteComment(id)
      .then(res => {
        setRefreshComments(true);
        dispatch(popupOpenOperation(res.data.message));
      })
      .catch(err => {
        const message = Object.values(err.data).join('');
        dispatch(popupOpenOperation(message, true));
        return err;
      });
  };
  return (
    <>
      <div className={styles.info} style={{ fontWeight: '600' }}>
        <div className={styles.product}>Продукт</div>
        <div className={styles.content}>Комментарий</div>
      </div>
      <div className={styles.info}>
        <div className={styles.product}>{comment.product.name}</div>
        <div className={styles.content}>{comment.content}</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCommentFunc(!openForm)}
        className={styles.button}
      />
      {openForm && (
        <UpdateCommentsForm comment={comment} setOpenForm={setOpenForm} setRefreshComments={setRefreshComments} />
      )}
    </>
  );
};

CommentsItem.propTypes = {
  comment: PropTypes.object.isRequired,
  setRefreshComments: PropTypes.func.isRequired,
};

export default CommentsItem;
