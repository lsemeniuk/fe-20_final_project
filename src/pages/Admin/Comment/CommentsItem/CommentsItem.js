import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteComment } from '../../../../http/commentAPI';
import styles from './CommentsItem.module.scss';
import UpdateCommentsForm from '../UpdateCommentsForm/UpdateCommentsForm';

const CommentsItem = ({ comment }) => {
  const { _id: id } = comment;
  const [openForm, setOpenForm] = useState(false);
  const [messageServer, setmessageServer] = useState(null);

  const deleteCommentFunc = () => {
    deleteComment(id)
      .then(res => {
        return res;
      })
      .catch(err => {
        setmessageServer(<span>{Object.values(err.data).join('')}</span>);
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
      <div className={styles.redTitle}>{messageServer}</div>
      {openForm && <UpdateCommentsForm comment={comment} setOpenForm={setOpenForm} />}
    </>
  );
};

CommentsItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentsItem;
