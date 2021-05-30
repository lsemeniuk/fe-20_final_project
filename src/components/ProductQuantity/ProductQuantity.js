import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProductsFilterOperation } from '../../store/products/operations';
import { getProductsFilterSelector } from '../../store/products/selectors';
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
      <span>Товаров на странице:</span>
      <select onChange={e => handlePerPage(e.target.value)} defaultValue={perPage} className={styles.select}>
        {options}
      </select>
    </div>
  );
};

export default ProductQuantity;
