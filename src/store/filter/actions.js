import { GET_FILTERS, CHECKED_FILTERS } from './types';

export const saveAllFiltersAction = filters => ({
  type: GET_FILTERS,
  payload: { allFilters: filters },
});

export const saveCheckedFiltersAction = filters => ({
  type: CHECKED_FILTERS,
  payload: { checkedFilters: filters },
});
