import axios from 'axios';
import { getProductsFilterOperation } from '../products/operations';
import { saveAllFiltersAction, saveCheckedFiltersAction } from './actions';

export const getFiltersOperation = () => async dispatch => {
  axios.get('/filter.json').then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};

export const saveFiltersOperation = props => async dispatch => {
  const { value, productFilters, history } = props;
  /* eslint no-console: 0 */
  dispatch(saveCheckedFiltersAction(value));
  const joined = {};
  Object.keys(value).forEach(item => {
    if (value[item].length) {
      joined[item] = value[item].join();
    }
    if (value[item].length === undefined) {
      const minPrice = value[item].minPrice.join();
      const maxPrice = value[item].maxPrice.join();
      joined.minPrice = minPrice;
      joined.maxPrice = maxPrice;
    }
  });

  dispatch(getProductsFilterOperation({ history, ...productFilters, ...joined }));
};
