import {
  SET_PRODUCTS,
  SET_PRODUCTS_FILTERED,
  SET_PRODUCTS_LOADING,
  SET_ONE_PRODUCT,
  SET_ONE_PRODUCT_LOADING,
  SET_PRODUCTS_FILTER,
  SET_PRODUCTS_QUANTITY,
} from './types';

export const saveProductsAction = products => ({ type: SET_PRODUCTS, payload: products });

export const saveProductsFilteredAction = products => ({ type: SET_PRODUCTS_FILTERED, payload: products });

export const saveOneProductAction = product => ({ type: SET_ONE_PRODUCT, payload: product });

export const saveProductsFilterAction = filter => ({ type: SET_PRODUCTS_FILTER, payload: filter });

export const saveProductsQuantityAction = quantity => ({ type: SET_PRODUCTS_QUANTITY, payload: quantity });

export const productsLoadingAction = isLoading => ({ type: SET_PRODUCTS_LOADING, payload: isLoading });

export const oneProductLoadingAction = isLoading => ({ type: SET_ONE_PRODUCT_LOADING, payload: isLoading });
