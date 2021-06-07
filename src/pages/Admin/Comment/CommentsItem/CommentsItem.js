import React from 'react';
// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import Button from '../../../../components/Button/Button';
// import { deleteComment } from '../../../../http/commentAPI';
// import { getColorsOperation } from '../../../../store/colors/operations';
// import UpdateCommentsForm from '../UpdateCommentsForm/UpdateCommentsForm';
// import styles from './CommentsItem.module.scss';

const CommentsItem = () => {
  // const { _id: id } = comment;
  // const dispatch = useDispatch();
  // const [openForm, setOpenForm] = useState(false);
  // const [messageServer, setmessageServer] = useState(null);

  // const deleteCommentFunc = () => {
  //   deleteComment(id)
  //     .then(res => {
  //       // dispatch(getColorsOperation());
  //       return res;
  //     })
  //     .catch(err => {
  //       setmessageServer(<span>{Object.values(err.data).join('')}</span>);
  //     });
  // };

  return (
    <>
      {/* <div className={styles.info} style={{ fontWeight: '600' }}>
        <div className={styles.product}>Название продукта</div>
        <div className={styles.content}>Комментарии</div>
      </div>
      <div className={styles.info}>
        <div className={styles.product}>{comment.product}</div>
        <div className={styles.name}>{comment.content}</div>
      </div> */}
      {/* <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} /> */}
      {/* <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCommentFunc(!openForm)}
        className={styles.button}
      /> */}
      {/* <div className={styles.redTitle}>{messageServer}</div> */}
      {/* {openForm && <UpdateCommentsForm comment={comment} setOpenForm={setOpenForm} />} */}
    </>
  );
};

// CommentsItem.propTypes = {
//   comment: PropTypes.object.isRequired,
// };

export default CommentsItem;
