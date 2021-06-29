import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import UpdateBrandsForm from '../UpdateBrandsForm/UpdateBrandsForm';
import { deleteBrand } from '../../../../http/brandsAPI';
import { getBrandsOperation } from '../../../../store/brands/operations';
import styles from './BrandsItem.module.scss';
import { popupOpenOperation } from '../../../../store/modal/operations';

const BrandsItem = ({ brand }) => {
  const { _id: id } = brand;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);

  const deleteCategoryFunc = () => {
    deleteBrand(id)
      .then(res => {
        dispatch(getBrandsOperation());
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
        <div className={styles.imgContainer}>Картинка</div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{brand.name}</div>
        <div className={styles.imgContainer}>
          {brand.imageUrl && <img className={styles.img} src={brand.imageUrl} alt={brand.name} />}
        </div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCategoryFunc(!openForm)}
        className={styles.button}
      />
      {openForm && <UpdateBrandsForm brand={brand} setOpenForm={setOpenForm} />}
    </>
  );
};

BrandsItem.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default BrandsItem;
