import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button/Button';
import UpdateProductsForm from '../UpdateProductsForm/UpdateProductsForm';
import { deleteBrand } from '../../../../http/brandsAPI';
import { getBrandsOperation } from '../../../../store/brands/operations';
import styles from './ProductsItem.module.scss';

const ProductsItem = ({ brand }) => {
  const { _id: id } = brand;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [messageServer, setmessageServer] = useState(null);

  const deleteCategoryFunc = () => {
    deleteBrand(id)
      .then(res => {
        dispatch(getBrandsOperation());
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
      <div className={styles.redTitle}>{messageServer}</div>
      {openForm && <UpdateProductsForm brand={brand} setOpenForm={setOpenForm} />}
    </>
  );
};

ProductsItem.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default ProductsItem;
