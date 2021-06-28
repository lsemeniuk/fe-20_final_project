import { SET_QUERY, SET_SEARCH_RESULTS } from './types';

export const setQueryAction = brand => {
  return { type: SET_QUERY, payload: brand };
};
export const saveSearchResultsAction = searchResults => {
  return { type: SET_SEARCH_RESULTS, payload: searchResults };
};
