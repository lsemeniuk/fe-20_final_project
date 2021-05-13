import { GET_FILTERS } from './types';

export const saveAllFiltersAction = filters => ({
  type: GET_FILTERS,
  payload: { allFilters: filters },
});
