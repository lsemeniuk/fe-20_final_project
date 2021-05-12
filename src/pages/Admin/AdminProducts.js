/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import PageContainer from '../../components/Container/PageContainer/PageContainer';
import Loader from '../../components/Loader/Loader';
import { getProductsOperation } from '../../store/products/operations';
import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import styles from './AdminProducts.module.scss';

const AdminProducts = () => {
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getProductsOperation());
  }, [dispatch]);
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  const createHandler = () => {
    /// TODO: dispatch create/add product action
  };
  const productItems = products.map(product => (
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
  ));
  return (
    <PageContainer>
      <div className={styles.row}>
        <h1>Products</h1>
        <Button type='button' title='Create Product' className={styles.create_btn} onClick={createHandler} />
      </div>
      {productsLoading ? (
        <Loader />
      ) : (
        <ul className={styles.grid_layout}>
          <li>
            <h3>ID</h3>
            <h3>NAME</h3>
            <h3>PRICE</h3>
            <h3>CATEGORY</h3>
            <h3>BRAND</h3>
            <h3>ACTIONS</h3>
          </li>
          {productItems}
        </ul>
      )}
    </PageContainer>
  );
};

export default AdminProducts;
