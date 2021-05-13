import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import { getOneProductOperation } from '../../store/products/operations';
import { getOneProductSelector, oneProductLoadingSelector } from '../../store/products/selectors';
import styles from './Product.module.scss';
import ProductImages from './ProductImages/ProductImages';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector(getOneProductSelector);
  const productLoading = useSelector(oneProductLoadingSelector);

  const location = useLocation();
  const arrPath = location.pathname.split('/');
  const pageId = arrPath[arrPath.length - 1];

  useEffect(() => {
    dispatch(getOneProductOperation(pageId));
  }, [dispatch]);

  if (productLoading) {
    return (
      <Container>
        <Loader fixed />
      </Container>
    );
  }
  console.log(product);

  return (
    <main>
      <Container>
        <div className={styles.breadCrumbs}>
          <NavLink className={styles.crumbsLink} to='/'>
            Главная
          </NavLink>
          <span className={styles.iconBreadcrumbs}>{}</span>
          <NavLink className={styles.crumbsLink} to='/products'>
            Все товары
          </NavLink>
          <span className={styles.iconBreadcrumbs}>{}</span>
          <span className={styles.crumbs}>Товар</span>
        </div>
        <div>
          <h2 className={styles.categoryTitle}>Товар</h2>
        </div>
        <nav className={styles.navBarProduct}>
          <span>Про товар</span>
          <span>Характеристики</span>
          <span>Отзывы</span>
        </nav>
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <ProductImages images={product.imageUrls} />
          </div>
          <div className={styles.flexColumn}>images</div>
        </div>
      </Container>
    </main>
  );
};

export default Product;
