import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../store/catalog/selectors';
import { PRODUCTS_ROUTE } from '../../utils/consts';
import Loader from '../Loader/Loader';

const CategoriesList = ({ classItem, className, activeClassName }) => {
  const categories = useSelector(getCategoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);

  if (categoriesLoading) {
    return <Loader />;
  }

  const categoriesList = categories
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .map(i => {
      return (
        <li key={i.id} className={classItem}>
          <NavLink to={`${PRODUCTS_ROUTE}/${i.id}`} className={className} activeClassName={activeClassName}>
            {i.name}
          </NavLink>
        </li>
      );
    });

  return categoriesList;
};

export default CategoriesList;
