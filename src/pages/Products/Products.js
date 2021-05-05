import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import AboutShop from '../../components/AboutShop/AboutShop';
import ProductList from '../../components/ProductList/ProductList';
import Container from '../../components/Container/Container';
import { INDEX_ROUTE } from '../../utils/consts';
import { getCategoriesSelector } from '../../store/catalog/selectors';
import BrandBar from '../../components/sliders/BrandBar/BrandBar';
import styles from './Products.module.scss';

const Products = () => {
  const location = useLocation();
  const categories = useSelector(getCategoriesSelector);
  const categorie = {};

  if (location.pathname === '/products') {
    categorie.name = 'Все товары';
  } else {
    categories.map(c => {
      if (location.pathname.includes(c.id)) {
        categorie.name = c.name;
      }
      return null;
    });
  }

  return (
    <Container>
      <div className={styles.productsPage}>
        <div className={styles.breadCrumbs}>
          <NavLink className={styles.crumbsLink} to={INDEX_ROUTE}>
            Главная
          </NavLink>
          <span className={styles.iconBreadcrumbs}>{}</span>
          <span className={styles.crumbs}>{categorie.name}</span>
        </div>
        <div>
          <h2 className={styles.categoryTitle}>{categorie.name}</h2>
        </div>
        <BrandBar />
        <div>Здесь будет компонент фильтрации и сортировки от Дениса</div>
        <ProductList />
        <AboutShop />
      </div>
    </Container>
  );
};

export default Products;
