import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import UpdateImagesForm from '../UpdateImagesForm/UpdateImagesForm';
import Button from '../../../../components/Button/Button';
import styles from './ImagesItem.module.scss';
// import { deleteImage } from '../../../../http/imagesAPI';

const ImagesItem = ({ image, setRefreshLoading }) => {
  const [openForm, setOpenForm] = useState(false);
  const [messageServer, setMessageServer] = useState(null);

  const deleteCategoryFunc = () => {
    axios.delete(`http://localhost:5000/api/images/${image.name}`).then(res => {
      if (res.status === 200) {
        setMessageServer(<span style={{ color: 'green' }}>{res.data.message}</span>);
        setRefreshLoading(true);
      }
    });

    // deleteImage(image.name)
    //   .then(res => {
    //     return res;
    //   })
    //   .catch(err => {
    //     setmessageServer(<span>{Object.values(err.data).join('')}</span>);
    //   });
  };

  return (
    <>
      <div className={styles.info} style={{ fontWeight: '600' }}>
        <div className={styles.imgContainer}>Картинка</div>
        <div className={styles.affiliation}>Принадлежность</div>
        <div className={styles.product}>Товар</div>
        <div className={styles.name}>Название</div>
      </div>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <a href={image.imageUrl} target='blanc'>
            <img className={styles.img} src={image.imageUrl} alt={image.name} />
          </a>
        </div>
        <div className={styles.affiliation}>{image.affiliation}</div>
        <div className={styles.product}>{image.product}</div>
        <div className={styles.name}>{image.name}</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCategoryFunc(!openForm)}
        className={styles.button}
      />
      <div className={styles.redTitle}>{messageServer}</div>
      {openForm && <UpdateImagesForm image={image} setRefreshLoading={setRefreshLoading} />}
    </>
  );
};

ImagesItem.propTypes = {
  image: PropTypes.object.isRequired,
  setRefreshLoading: PropTypes.func.isRequired,
};

export default ImagesItem;
