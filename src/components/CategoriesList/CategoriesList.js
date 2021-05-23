import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../store/catalog/selectors';
import { PRODUCTS_ROUTE } from '../../utils/consts';
import Loader from '../Loader/Loader';

const CategoriesList = ({ className, classItem }) => {
  const categories = useSelector(getCategoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);

  if (categoriesLoading) {
    return <Loader />;
  }

  const categoriesList = categories.map(i => {
    return (
      <li key={i.id} className={classItem}>
        <NavLink to={`${PRODUCTS_ROUTE}/${i.id}`} className={className}>
          {i.name}
        </NavLink>
      </li>
    );
  });
  return categoriesList;
};

export default CategoriesList;
