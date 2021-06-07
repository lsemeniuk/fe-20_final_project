import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { getFiltersOperation } from '../../../../store/filter/operations';
import { filtersLoadingSelector, getFiltersSelector } from '../../../../store/filter/selectors';
import FiltersItem from '../FiltersItem/FiltersItem';

const FiltersList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFiltersSelector);
  const filterLoading = useSelector(filtersLoadingSelector);

  useEffect(() => {
    dispatch(getFiltersOperation());
  }, []);

  if (!filterLoading) {
    return <Loader />;
  }

  const filterList = filters.map(filter => {
    return (
      <li key={filter.name} style={{ padding: '10px' }}>
        <FiltersItem filter={filter} />
      </li>
    );
  });

  return <ul>{filterList}</ul>;
};

export default FiltersList;
