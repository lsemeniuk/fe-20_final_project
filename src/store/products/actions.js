import { SET_PRODUCTS } from './types';

export const saveProductsAction = products => ({ type: SET_PRODUCTS, payload: products });
