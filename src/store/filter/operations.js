/* eslint no-console: "error" */
import axios from 'axios';
import { getFilters, getFilterByType } from '../../http/filtersAPI';
import { saveAllFiltersAction, saveCheckedFiltersAction } from './actions';

export const getFiltersOperation = () => async dispatch => {
  axios.get('/filter.json').then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};

export const saveFiltersOperation = value => async dispatch => {
  /* eslint no-console: 0 */
  console.log('🚀 ~ file: operations.js ~ line 12 ~ dispatch', dispatch);
  console.log('🚀 ~ file: operations.js ~ line 14 ~ value', value);
  dispatch(saveCheckedFiltersAction(value));

  const joined = {};
  Object.keys(value).forEach(item => {
    if (value[item].length) {
      joined[item] = encodeURIComponent(value[item].join());
    }
  });
  // const filterEmptyValues = joined.map(item => {
  //   console.log('filterEmptyValues ~ item', item);
  //   if (item) {
  //     return item;
  //   }
  //   return null;
  // });
  // console.log(' filterEmptyValues', filterEmptyValues);
  console.log('~ joined', joined);

  const config = {
    url: 'https://fe-20-final-project.herokuapp.com/api/filters',
    method: 'post',
    params: {
      ...joined,
    },
  };
  try {
    const response = await axios.request(config);
    console.log('response', response.data);
    console.log('response', response);
  } catch (r) {
    console.log(r);
  }
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
