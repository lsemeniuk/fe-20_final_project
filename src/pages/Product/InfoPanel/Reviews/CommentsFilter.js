/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerSelector } from '../../../../store/customer/selectors';
import { getOneProductSelector } from '../../../../store/products/selectors';
import {
  getAllCommentsOperation,
  getMyCommentsOperation,
  getProductCommentsOperation,
} from '../../../../store/reviews/operations';
import styles from './CommentsFilter.module.scss';

const CommentsFilter = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(getOneProductSelector);
  const productId = currentProduct._id;

  const currentCustomer = useSelector(getCustomerSelector);
  const customerId = currentCustomer._id;

  const filterOptions = ['Все комментарии', 'Мои комментарии', 'Комм об этом товаре'];

  const handleChange = value => {
    if (value === filterOptions[1]) {
      dispatch(getMyCommentsOperation(customerId));
    } else if (value === filterOptions[2]) {
      dispatch(getProductCommentsOperation(productId));
    } else {
      dispatch(getAllCommentsOperation());
    }
  };
  const options = filterOptions.map(op => (
    <option key={op} value={op}>
      {op}
    </option>
  ));

  return (
    <div className={styles.filter}>
      <span className={styles.text}>Показать:</span>
      <select onChange={e => handleChange(e.target.value)} defaultValue={filterOptions[0]} className={styles.select}>
        {options}
      </select>
    </div>
  );
};
export default CommentsFilter;
