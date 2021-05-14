import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UpdateCategoryForm from '../UpdateCategoryForm/UpdateCategoryForm';
import Button from '../../../../components/Button/Button';
import { deleteCategory } from '../../../../http/catalogAPI';
import styles from './CategoriesItem.module.scss';
import { getCatalogOperation } from '../../../../store/catalog/operations';

const CategoriesItem = ({ category }) => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);

  const deleteCategoryFunc = () => {
    deleteCategory(category.id).then(res => {
      dispatch(getCatalogOperation());
      return res;
    });
  };

  return (
    <>
      <div className={styles.info} style={{ fontWeight: '600' }}>
        <div className={styles.imgContainer}>Картинка</div>
        <div className={styles.id}>ID</div>
        <div className={styles.name}>Название</div>
        <div className={styles.description}>Описание</div>
        <div className={styles.level}>Уров.</div>
      </div>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          {category.imgUrl && <img className={styles.img} src={category.imgUrl} alt={category.name} />}
        </div>
        <div className={styles.id}>{category.id}</div>
        <div className={styles.name}>{category.name}</div>
        <div className={styles.description}>{category.description}</div>
        <div className={styles.level}>{category.level}</div>
      </div>
      <Button title='Изменить' onClick={() => setOpenForm(!openForm)} className={styles.button} />
      <Button
        variant='outline'
        title='Удалить'
        onClick={() => deleteCategoryFunc(!openForm)}
        className={styles.button}
      />
      {openForm && <UpdateCategoryForm category={category} setOpenForm={setOpenForm} />}
    </>
  );
};

CategoriesItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoriesItem;
