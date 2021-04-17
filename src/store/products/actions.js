import axios from 'axios';
import { GET_PRODUCTS } from './types';

export const getProductsAction = () => dispatch => {
  axios.get('/products.json').then(res => {
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  });
};
