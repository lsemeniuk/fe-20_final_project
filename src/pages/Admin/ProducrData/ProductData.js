/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import styles from '../AdminProducts.module.scss';
import Button from '../../../components/Button/Button';

const ProductData = ({ product }) => {
  const history = useHistory();
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  return (
    <li key={product._id} className={styles.productItem}>
      <div>{product._id}</div>
      <div>{product.name}</div>
      <div>{product.currentPrice}</div>
      <div>{product.categories}</div>
      <div>{product.brand}</div>
      <div>
        <Button
          type='button'
          title='Edit'
          className={styles.action_btn}
          onClick={() => history.push(`/product/${product._id}/edit`)}
        />
        <Button type='button' title='Delete' className={styles.action_btn} onClick={() => deleteHandler(product)} />
      </div>
    </li>
  );
};
ProductData.propTypes = {
  product: PropTypes.objectOf.isRequired,
};
export default ProductData;
