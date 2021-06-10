import axios from 'axios';
import { getProductsFilterParams } from '../../http/productAPI';
import { productsLoadingAction, saveProductsFilteredAction, saveProductsQuantityAction } from '../products/actions';
// import { useSelector } from 'react-redux';
// import { getProductsFilterSelector } from '../products/selectors';
import { saveAllFiltersAction, saveCheckedFiltersAction } from './actions';

export const getFiltersOperation = () => async dispatch => {
  axios.get('/filter.json').then(res => {
    dispatch(saveAllFiltersAction(res.data));
  });
};

export const saveFiltersOperation = props => async dispatch => {
  const { value, productFilters } = props;
  console.log('🚀 ~ file: operations.js ~ line 15 ~ productFilters', productFilters);
  console.log('🚀 ~ file: operations.js ~ line 13 ~ value', value);
  // const productFilters = useSelector(getProductsFilterSelector);
  /* eslint no-console: 0 */
  dispatch(saveCheckedFiltersAction(value));
  const joined = {};
  Object.keys(value).forEach(item => {
    console.log('🚀 ~ file: operations.js ~ line 19 ~ Object.keys ~ value[item].length', value[item].length);
    if (value[item].length) {
      joined[item] = value[item].join();
    }
    if (value[item].length === undefined) {
      const minPrice = value[item].minPrice.join();
      const maxPrice = value[item].maxPrice.join();
      joined.minPrice = minPrice;
      joined.maxPrice = maxPrice;
      console.log('🚀 ~ file: operations.js ~ line 38 ~ Object.keys ~ joined', joined);
    }
  });

  console.log('~ joined', joined);

  const config = {
    url: 'https://fe-20-final-project.herokuapp.com/api/products/filter',
    method: 'get',
    params: {
      ...joined,
      ...productFilters,
    },
  };
  const filters = {
    ...joined,
    ...productFilters,
  };
  // dispatch(getProductsFilterOperation(history, config, productFilters));
  getProductsFilterParams(filters).then(res => {
    dispatch(saveProductsFilteredAction(res.data.products));
    dispatch(saveProductsQuantityAction(res.data.productsQuantity));
    dispatch(productsLoadingAction(false));
  });
  console.log(' config', config);
  try {
    const response = await axios.request(config);

    console.log('response', response.data);
    console.log('response', response);
  } catch (r) {
    console.log(r);
  }
};
