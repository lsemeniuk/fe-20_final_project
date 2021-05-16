import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import { getOneProductOperation } from '../../store/products/operations';
import { getOneProductSelector, oneProductLoadingSelector } from '../../store/products/selectors';
import ProductImages from './ProductImages/ProductImages';
import styles from './Product.module.scss';
import Availability from './Availability/Availability';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector(getOneProductSelector);
  const productLoading = useSelector(oneProductLoadingSelector);

  const params = useParams();

  useEffect(() => {
    dispatch(getOneProductOperation(params.id));
  }, [dispatch]);

  if (productLoading) {
    return (
      <Container>
        <div style={{ height: '60vh' }}>
          <Loader fixed />
        </div>
      </Container>
    );
  }

  const { brand, name, quantity } = product;

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
          <span className={styles.crumbs}>Смарт часы {brand}</span>
        </div>

        <div>
          <h2 className={styles.categoryTitle}>{name}</h2>
        </div>

        <nav className={styles.navBarProduct}>
          <span>Про товар</span>
          <span>Характеристики</span>
          <span>Отзывы</span>
        </nav>

        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <ProductImages product={product} />
          </div>

          <div className={styles.flexColumn}>
            <Availability quantity={quantity} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Product;
