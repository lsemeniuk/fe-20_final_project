/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CommentsFilter.module.scss';
import { getCustomerSelector } from '../../../../../store/customer/selectors';
import { getAllCommentsOperation, getMyCommentsOperation } from '../../../../../store/reviews/operations';

const CommentsFilter = () => {
  const dispatch = useDispatch();

  const currentCustomer = useSelector(getCustomerSelector);
  const customerId = currentCustomer._id;

  const filterOptions = ['Все комментарии', 'Мои комментарии'];

  const handleChange = value => {
    if (value === filterOptions[1]) {
      dispatch(getMyCommentsOperation(customerId));
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
