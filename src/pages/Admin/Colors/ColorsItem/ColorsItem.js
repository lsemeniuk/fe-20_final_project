import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteColor } from '../../../../http/colorsAPI';
import { getColorsOperation } from '../../../../store/colors/operations';
import UpdateColorsForm from '../UpdateColorsForm/UpdateColorsForm';
import styles from './ColorsItem.module.scss';
import { popupOpenOperation } from '../../../../store/modal/operations';

const ColorsItem = ({ color }) => {
  const { _id: id } = color;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);

  const deleteCategoryFunc = () => {
    deleteColor(id)
      .then(res => {
        dispatch(getColorsOperation());
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
        <div className={styles.name}>Название</div>
        <div className={styles.colorContainer}>Цвет</div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{color.name}</div>
        <div className={styles.colorContainer} style={{ backgroundColor: color.cssValue }}>
          {' '}
        </div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCategoryFunc(!openForm)}
        className={styles.button}
      />
      {openForm && <UpdateColorsForm color={color} setOpenForm={setOpenForm} />}
    </>
  );
};

ColorsItem.propTypes = {
  color: PropTypes.object.isRequired,
};

export default ColorsItem;
