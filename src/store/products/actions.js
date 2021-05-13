import { SET_PRODUCTS, SET_PRODUCTS_LOADING } from './types';

export const saveProductsAction = products => ({ type: SET_PRODUCTS, payload: products });
export const productsLoadingAction = isLoading => ({ type: SET_PRODUCTS_LOADING, payload: isLoading });
