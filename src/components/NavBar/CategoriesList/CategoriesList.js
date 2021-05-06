import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCatalogOperation } from '../../../store/catalog/operations';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../../store/catalog/selectors';
import { PRODUCTS_ROUTE } from '../../../utils/consts';
import Loader from '../../Loader/Loader';

const CategoriesList = ({ className, classItem }) => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const isLoading = useSelector(categoriesLoadingSelector);

  useEffect(() => {
    dispatch(getCatalogOperation());
    console.log(categories);
  }, [dispatch]);

  if (isLoading) {
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
