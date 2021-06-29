import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProductsFilterOperation } from '../../store/products/operations';
import { getProductsFilterSelector } from '../../store/products/selectors';
import Icons from '../Icons/Icons';
import styles from './ProductQuantity.module.scss';

const optionsPerPage = [9, 12, 15, 18, 21];

const ProductQuantity = () => {
  const dispatch = useDispatch();
  const { perPage, startPage, ...filter } = useSelector(getProductsFilterSelector);
  const history = useHistory();

  const handlePerPage = value => {
    dispatch(getProductsFilterOperation({ history, ...filter, startPage, perPage: value }));
  };

  const options = optionsPerPage.map(op => (
    <option key={op} value={op}>
      {op}
    </option>
  ));

  return (
    <div className={styles.setQuantity}>
      <span className={styles.setQuantityText}>Товаров на странице:</span>
      <Icons type='quantity' className={styles.icons} color='#353535' width={20} height={20} />
      <select onChange={e => handlePerPage(e.target.value)} defaultValue={perPage} className={styles.select}>
        {options}
      </select>
    </div>
  );
};

export default ProductQuantity;
