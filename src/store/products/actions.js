import { SET_PRODUCTS, SET_PRODUCTS_LOADING, SET_ONE_PRODUCT, SET_ONE_PRODUCT_LOADING } from './types';

export const saveProductsAction = products => ({ type: SET_PRODUCTS, payload: products });

export const saveOneProductAction = product => ({ type: SET_ONE_PRODUCT, payload: product });

export const productsLoadingAction = isLoading => ({ type: SET_PRODUCTS_LOADING, payload: isLoading });

export const oneProductLoadingAction = isLoading => ({ type: SET_ONE_PRODUCT_LOADING, payload: isLoading });
