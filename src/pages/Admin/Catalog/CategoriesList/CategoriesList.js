import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { getCatalogOperation } from '../../../../store/catalog/operations';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../../../store/catalog/selectors';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);

  useEffect(() => {
    dispatch(getCatalogOperation());
  }, []);

  if (categoriesLoading) {
    return <Loader />;
  }

  const categoriesList = categories.map(category => {
    return (
      <li key={category.id} style={{ padding: '10px' }}>
        <CategoriesItem category={category} />
      </li>
    );
  });

  return <ul>{categoriesList}</ul>;
};

export default CategoriesList;
