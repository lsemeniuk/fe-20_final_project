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
  }, []);
  const deleteHandler = () => {
    /// TODO: dispatch delete action
  };
  return (
    <PageContainer>
      <h1>Products</h1>
      {productsLoading ? (
        <Loader />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.currentPrice}</td>
                <td>{product.categories}</td>
                <td>{product.brand}</td>
                <td>
                  <Button
                    type='button'
                    title='Edit'
                    className={styles.small}
                    onClick={() => history.push(`/product/${product._id}/edit`)}
                  />
                  <Button
                    type='button'
                    title='Delete'
                    className={styles.small}
                    onClick={() => deleteHandler(product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageContainer>
  );
};

export default AdminProducts;
