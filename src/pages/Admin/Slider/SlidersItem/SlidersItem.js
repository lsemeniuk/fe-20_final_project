import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteSlide } from '../../../../http/slidesAPI';
import styles from './FiltersItem.module.scss';
import UpdateSlidersForm from '../UpdateSlidersForm/UpdateSlidersForm';

const SlidersItem = ({ slider }) => {
  const { _id: id } = slider;
  const [openForm, setOpenForm] = useState(false);
  const [messageServer, setmessageServer] = useState(null);

  const deleteSlidersFunc = () => {
    deleteSlide(id)
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
        <div className={styles.title}>Заголовок Слайдера</div>
        <div className={styles.imageUrl}>Картинка</div>
        <div className={styles.description}>Описание</div>
        <div className={styles.product}>Продукт</div>
      </div>
      <div className={styles.info}>
        <div className={styles.type}>{filter.type}</div>
        <div className={styles.name}>{filter.name}</div>
        <div className={styles.description}>Описание</div>
        <div className={styles.product}>Продукт</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteSlidersFunc(!openForm)}
        className={styles.button}
      />
      <div className={styles.redTitle}>{messageServer}</div>
      {openForm && <UpdateSlidersForm slider={slider} setOpenForm={setOpenForm} />}
    </>
  );
};

SlidersItem.propTypes = {
  slider: PropTypes.object.isRequired,
};

export default SlidersItem;
