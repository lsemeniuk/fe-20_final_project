import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import styles from './ColorsItem.module.scss';
import { deleteColor } from '../../../../http/colorsAPI';
import { getColorsOperation } from '../../../../store/colors/operations';
import UpdateColorsForm from '../UpdateColorsForm/UpdateColorsForm';

const ColorsItem = ({ color }) => {
  const { _id: id } = color;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [messageServer, setmessageServer] = useState(null);

  const deleteCategoryFunc = () => {
    deleteColor(id)
      .then(res => {
        dispatch(getColorsOperation());
        return res;
      })
      .catch(err => {
        setmessageServer(<span>{Object.values(err.data).join('')}</span>);
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
        <div className={styles.colorContainer}>
          {color.imageUrl && <img className={styles.color} src={color.imageUrl} alt={color.name} />}
        </div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCategoryFunc(!openForm)}
        className={styles.button}
      />
      <div className={styles.redTitle}>{messageServer}</div>
      {openForm && <UpdateColorsForm color={color} setOpenForm={setOpenForm} />}
    </>
  );
};

ColorsItem.propTypes = {
  color: PropTypes.object.isRequired,
};

export default ColorsItem;
