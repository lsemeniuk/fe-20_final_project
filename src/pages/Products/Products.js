import React, { useState, useEffect } from 'react';
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
import Filter from '../../components/Filter/Filter';
import styles from './Products.module.scss';
import Loader from '../../components/Loader/Loader';
import { searchProducts } from '../../http/productAPI';
import { getProductsFilterOperation } from '../../store/products/operations';
import { getQueryStringSelector } from '../../store/search/selectors';

const Products = () => {
  const dispatch = useDispatch();
  const { perPage, startPage, ...filter } = useSelector(getProductsFilterSelector);

  const productsQuantity = useSelector(getProductsQuantitySelector);
  const history = useHistory();
  const categories = useSelector(getCategoriesSelector);
  const categorie = {};
  const params = useParams();

  const searchWords = useSelector(getQueryStringSelector);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [error, setError] = useState(false);

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
  useEffect(() => {
    if (searchWords !== '') {
      const queryString = { query: searchWords };
      setResultsLoading(true);
      searchProducts(queryString)
        .then(res => {
          setSearchResults(res.data);
          if (res.data.length === 0) {
            setNothingFound(true);
          } else {
            setNothingFound(false);
          }
        })
        .catch(err => setError(err.message));
      setResultsLoading(false);
    }
    return null;
  }, [searchWords]);

  if (resultsLoading) return <Loader />;

  const setPage = page => {
    dispatch(getProductsFilterOperation({ history, ...filter, perPage, startPage: page }));
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
          <div className={styles.row}>
            <h2 className={styles.categoryTitle}>{categorie.name}</h2>
          </div>
          <BrandBar />
          <div className={styles.flexRow}>
            <ContainerAside>
              <Filter />
            </ContainerAside>

            <ContainerPage style={{ padding: '0' }}>
              <div className={styles.catalogSettings}>
                <ProductQuantity />
                <div className={styles.inCenter}>
                  {error.length && <p className={styles.danger}>Произошла ошибка: {error}</p>}
                  {searchResults.length > 0 && <p className={styles.success}>Найдено {searchResults.length} товаров</p>}
                  {nothingFound && <p> Ничего не найдено...</p>}
                </div>
                <Sorting />
              </div>

              <ProductList searchResults={searchResults} />
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
