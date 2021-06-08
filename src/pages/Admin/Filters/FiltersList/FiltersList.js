import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { getFilters } from '../../../../http/filtersAPI';
import FiltersItem from '../FiltersItem/FiltersItem';

const FiltersList = () => {
  const [filters, setFilters] = useState([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const [refreshFilters, setRefreshFilters] = useState(true);

  useEffect(() => {
    setFiltersLoading(true);
    getFilters().then(res => {
      setFilters(res.data);
      setRefreshFilters(false);
      setFiltersLoading(false);
    });
  }, [refreshFilters]);

  if (filtersLoading) {
    return <Loader />;
  }

  const filtersList = filters.map(filter => {
    return (
      <li key={filter.name}>
        <FiltersItem filter={filter} />
      </li>
    );
  });

  return (
    <div>
      <ul>{filtersList}</ul>
    </div>
  );
};

export default FiltersList;
