/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import ContainerPage from '../../components/ContainerPage/ContainerPage';
import Loader from '../../components/Loader/Loader';
import { getProductsOperation } from '../../store/products/operations';
import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import styles from './AdminProducts.module.scss';
import ProductData from './ProductData/ProductData';

const AdminProducts = () => {
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsOperation());
  }, [dispatch]);

  const createHandler = () => {
    /// TODO: dispatch create/add product action
  };
  const productItems = products.map(product => <ProductData key={product._id} product={product} />);

  return (
    <ContainerPage>
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
    </ContainerPage>
  );
};

export default AdminProducts;
