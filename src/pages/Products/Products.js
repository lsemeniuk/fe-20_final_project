/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import Container from '../../components/Container/Container';
import { INDEX_ROUTE } from '../../utils/consts';
import { getCategoriesSelector } from '../../store/catalog/selectors';
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
import Icons from '../../components/Icons/Icons';
import Button from '../../components/Button/Button';

const Products = () => {
  const categories = useSelector(getCategoriesSelector);
  const categorie = {};
  const params = useParams();

  const [resultsLoading, setResultsLoading] = useState(false);
  const [searchWords, setSearchWords] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);

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
  const handleSubmit = e => {
    e.preventDefault();
    const queryString = { query: searchWords };
    setResultsLoading(true);
    searchProducts(queryString)
      .then(res => {
        setSearchResults(res.data);
        console.log(searchResults);
        if (res.data.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      })
      .catch(err => console.log(err));
    setResultsLoading(false);
  };

  if (resultsLoading) return <Loader />;

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
            <form onSubmit={handleSubmit}>
              <div className={styles.search}>
                <div className={styles.search__icon__wrapper}>
                  <Icons type='search' filled className={styles.search__icon} />
                </div>
                <input
                  type='text'
                  placeholder='Я ищу...'
                  onChange={e => setSearchWords(e.target.value)}
                  className={styles.search__input}
                />
                <Button type='submit' className={styles.search__button} title='Найти' />
              </div>
            </form>
            <p>Error</p>
          </div>
          {searchResults.length > 0 && <p>Найдено {searchResults.length} товаров</p>}
          {nothingFound && <p>По Вашему запросу ничего не найдено. Уточните, пож-та, запрос</p>}
          <BrandBar />
          <div className={styles.flexRow}>
            <ContainerAside>
              <Filter />
            </ContainerAside>

            <ContainerPage style={{ padding: '0' }}>
              <div className={styles.catalogSettings}>
                <ProductQuantity />
                <Sorting />
              </div>

              <ProductList searchResults={searchResults} />
              <Pagination />
            </ContainerPage>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Products;
