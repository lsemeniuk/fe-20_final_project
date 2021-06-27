import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import Container from '../../components/Container/Container';
import { INDEX_ROUTE } from '../../utils/consts';
import { getCategoriesSelector } from '../../store/catalog/selectors';
import { getProductsFilterSelector, getProductsQuantitySelector } from '../../store/products/selectors';
import BrandBar from '../../components/sliders/BrandBar/BrandBar';
import ContainerPage from '../../components/ContainerPage/ContainerPage';
import ContainerAside from '../../components/ContainerAside/ContainerAside';
import Pagination from '../../components/Pagination/Pagination';
import ProductQuantity from '../../components/ProductQuantity/ProductQuantity';
import Sorting from '../../components/Sorting/Sorting';
import Select from '../../components/SelectBar/Select/Select';
import styles from './Products.module.scss';
import { getProductsFilterOperation } from '../../store/products/operations';
import { changeProductsStyle } from '../../store/products/actions';

const Products = () => {
  const dispatch = useDispatch();
  const { perPage, startPage, ...filter } = useSelector(getProductsFilterSelector);
  const productsQuantity = useSelector(getProductsQuantitySelector);
  const history = useHistory();
  const categories = useSelector(getCategoriesSelector);
  const categorie = {};
  const params = useParams();
  const isGrid = JSON.parse(localStorage.getItem('ProductStyle'));

  useEffect(() => {
    dispatch(changeProductsStyle(isGrid));
  }, []);

  if (params.categories === 'all') {
    categorie.name = 'Все товары';
  } else {
    categories.map(c => {
      if (params.categories === c.id) {
        categorie.name = c.name;
      }
      return null;
    });
  }

  const setPage = page => {
    dispatch(getProductsFilterOperation({ history, ...filter, perPage, startPage: page }));
  };

  const changeProductsStyleFunc = e => {
    const type = e.target.value;
    if (type === 'grid') {
      dispatch(changeProductsStyle(true));
      localStorage.setItem('ProductStyle', true);
    } else {
      dispatch(changeProductsStyle(false));
      localStorage.setItem('ProductStyle', false);
    }
  };

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
              <Select className={styles.select_desc} />
            </ContainerAside>

            <ContainerPage style={{ padding: '0' }}>
              <div className={styles.catalogSettings}>
                <Select className={styles.select_mobile} />
                <ProductQuantity />
                <Sorting />
                <div>
                  <button onClick={e => changeProductsStyleFunc(e)} value='grid' type='button'>
                    Grid
                  </button>
                  <button onClick={e => changeProductsStyleFunc(e)} value='inLine' type='button'>
                    In line
                  </button>
                </div>
              </div>
              <ProductList />
              <Pagination
                perPage={perPage}
                startPage={startPage}
                productsQuantity={productsQuantity}
                setPage={setPage}
              />
            </ContainerPage>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Products;
