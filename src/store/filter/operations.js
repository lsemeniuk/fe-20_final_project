import axios from 'axios';
import { getFilters, getFilterByType } from '../../http/filtersAPI';
import { saveAllFiltersAction, saveCheckedFiltersAction } from './actions';

export const getFiltersOperation = () => async dispatch => {
  axios.get('/filter.json').then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};

export const getFilterOperation = () => async dispatch => {
  getFilters().then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};
export const getFilterByTypeOperation = () => async dispatch => {
  getFilterByType().then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};
export const checkedFiltersOperation = value => async dispatch => {
  dispatch(saveCheckedFiltersAction(value));
};
