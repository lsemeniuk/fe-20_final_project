import axios from 'axios';

import { saveAllFiltersAction, saveCheckedFiltersAction } from './actions';

export const getFiltersOperation = () => async dispatch => {
  axios.get('/filter.json').then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};

export const saveFiltersOperation = value => async dispatch => {
  /* eslint no-console: 0 */
  dispatch(saveCheckedFiltersAction(value));
  const joined = {};
  Object.keys(value).forEach(item => {
    console.log('🚀 ~ file: operations.js ~ line 19 ~ Object.keys ~ value[item].length', value[item].length);
    if (value[item].length) {
      // joined[item] = encodeURIComponent(value[item].join());
      joined[item] = value[item].join();
      // console.log(
      //   '🚀 ~ file: operations.js ~ line 22 ~ Object.keys ~ encodeURIComponent(value[item].join());',
      //   encodeURIComponent(value[item].join())
      // );
    }
    if (value[item].length === undefined) {
      const minPrice = value[item].minPrice.join();
      const maxPrice = value[item].maxPrice.join();
      joined.minPrice = minPrice;
      joined.maxPrice = maxPrice;
      console.log('🚀 ~ file: operations.js ~ line 38 ~ Object.keys ~ joined', joined);
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
  // dispatch(getProductsFilterOperation(history, config, productFilters));

  const config = {
    url: 'https://fe-20-final-project.herokuapp.com/api/products/filter',
    method: 'get',
    params: {
      ...joined,
    },
  };
  console.log(' config', config);
  try {
    const response = await axios.request(config);

    console.log('response', response.data);
    console.log('response', response);
  } catch (r) {
    console.log(r);
  }
};
