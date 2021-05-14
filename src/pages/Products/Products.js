import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import Container from '../../components/Container/Container';
import { INDEX_ROUTE } from '../../utils/consts';
import { getCategoriesSelector } from '../../store/catalog/selectors';
import BrandBar from '../../components/sliders/BrandBar/BrandBar';
import ContainerPage from '../../components/ContainerPage/ContainerPage';
import ContainerAside from '../../components/ContainerAside/ContainerAside';
import styles from './Products.module.scss';
import Select from '../../components/SelectBar/Select/Select';

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
    <main>
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
          <div className={styles.flexRow}>
            <ContainerAside>
              {/* <div>
                <h2 className={styles.filterTitle}>Filter</h2>
              </div> */}
              <Select />
            </ContainerAside>
            <ContainerPage style={{ padding: '0' }}>
              <ProductList />
            </ContainerPage>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Products;
