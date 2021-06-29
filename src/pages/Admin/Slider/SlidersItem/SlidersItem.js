import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteSlide } from '../../../../http/slidesAPI';
import styles from './SlidersItem.module.scss';
import UpdateSlidersForm from '../UpdateSlidersForm/UpdateSlidersForm';
import { popupOpenOperation } from '../../../../store/modal/operations';

const SlidersItem = ({ slider, setRefreshSliders }) => {
  const dispatch = useDispatch();
  const { customId } = slider;
  const [openForm, setOpenForm] = useState(false);

  const deleteSlidersFunc = () => {
    deleteSlide(customId)
      .then(res => {
        setRefreshSliders();
        dispatch(popupOpenOperation(res.data.message));
      })
      .catch(err => {
        const message = Object.values(err.data).join('');
        dispatch(popupOpenOperation(message, true));
      });
  };

  return (
    <>
      <div className={styles.info} style={{ fontWeight: '600' }}>
        <div className={styles.title}>Заголовок Слайдера</div>
        <div className={styles.imageUrl}>Картинка</div>
        <div className={styles.description}>Описание</div>
        <div className={styles.product}>Категория Товара</div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{slider.title}</div>
        <div className={styles.imageUrl}>
          {slider.imageUrl && <img className={styles.img} src={slider.imageUrl} alt={slider.name} />}
        </div>
        <div className={styles.description}>{slider.description}</div>
        <div className={styles.product}>{slider.category.name}</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteSlidersFunc(!openForm)}
        className={styles.button}
      />
      {openForm && (
        <UpdateSlidersForm slider={slider} setOpenForm={setOpenForm} setRefreshSliders={setRefreshSliders} />
      )}
    </>
  );
};

SlidersItem.propTypes = {
  slider: PropTypes.object.isRequired,
  setRefreshSliders: PropTypes.func.isRequired,
};

export default SlidersItem;
