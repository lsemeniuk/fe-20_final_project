import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProductsFilterOperation } from '../../store/products/operations';
import { getProductsFilterSelector } from '../../store/products/selectors';
import styles from './Sorting.module.scss';

const sortList = [
  { name: 'Новинки', value: '-date' },
  { name: 'Старые товары', value: 'date' },
  { name: 'Дешевые', value: 'currentPrice' },
  { name: 'Дорогие', value: '-currentPrice' },
];

const Sorting = () => {
  const dispatch = useDispatch();
  const productsFilter = useSelector(getProductsFilterSelector);
  const history = useHistory();

  const sortingProducts = value => {
    dispatch(getProductsFilterOperation({ history, ...productsFilter, sort: value }));
  };

  const optionList = sortList.map(sort => (
    <option key={sort.name} value={sort.value}>
      {sort.name}
    </option>
  ));

  return (
    <div className={styles.sort}>
      <span>Показать сначала</span>
      <select className={styles.sortField} onChange={e => sortingProducts(e.target.value)} name='sorting'>
        {optionList}
      </select>
    </div>
  );
};

export default Sorting;
