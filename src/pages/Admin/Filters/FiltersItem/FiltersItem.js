import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import { deleteFilter } from '../../../../http/filtersAPI';
import styles from './FiltersItem.module.scss';
import { getFiltersOperation } from '../../../../store/filter/operations';
import UpdateFiltersForm from '../UpdateFiltersForm/UpdateFiltersForm';
import { popupOpenOperation } from '../../../../store/modal/operations';

const FiltersItem = ({ filter }) => {
  const { _id: id } = filter;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);

  const deleteFilterFunc = () => {
    deleteFilter(id)
      .then(res => {
        dispatch(getFiltersOperation());
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
        <div className={styles.type}>Тип фильтра</div>
        <div className={styles.name}>Имя фильтра</div>
      </div>
      <div className={styles.info}>
        <div className={styles.type}>{filter.type}</div>
        <div className={styles.name}>{filter.name}</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button variant='outline' title='Удалить' onClick={() => deleteFilterFunc(!openForm)} className={styles.button} />
      {openForm && <UpdateFiltersForm filter={filter} setOpenForm={setOpenForm} />}
    </>
  );
};

FiltersItem.propTypes = {
  filter: PropTypes.object.isRequired,
};

export default FiltersItem;
