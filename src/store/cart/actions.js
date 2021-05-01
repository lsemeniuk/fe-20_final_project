import { SET_CART, SET_CART_LOADING } from './types';

export const saveCartAction = cart => ({ type: SET_CART, payload: cart });

export const cartLoadingAction = isLoading => ({ type: SET_CART_LOADING, payload: isLoading });
