/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getCustomerSelector } from '../../../../store/customer/selectors';
import { getOneProductSelector } from '../../../../store/products/selectors';
import { getAllCommentsOperation } from '../../../../store/reviews/operations';
import styles from './CommentsFilter.module.scss';

const CommentsFilter = () => {
  const dispatch = useDispatch();
  const currentProduct = getOneProductSelector();
  const productId = currentProduct._id;
  console.log(productId);
  const currentCustomer = getCustomerSelector();
  const customerId = currentCustomer._id;
  console.log(customerId);
  const filterOptions = ['Все комментарии', 'Мои комментарии', 'Комм. об этом товаре'];

  const handleChange = value => {
    if (value === filterOptions[1]) {
      //   dispatch(getMyCommentsOperation(customerId));
      console.log('Filter My Comments');
    } else if (value === filterOptions[2]) {
      //   dispatch(getProductCommentsOperation(productId));
      console.log('Filter This Product Comments');
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
      <span>Показать:</span>
      <select onChange={e => handleChange(e.target.value)} defaultValue={filterOptions[0]} className={styles.select}>
        {options}
      </select>
    </div>
  );
};
export default CommentsFilter;
