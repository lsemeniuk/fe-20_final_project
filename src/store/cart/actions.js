import { SET_CART, SET_CART_LOADING, SET_CART_TOTAL_PRICE } from './types';

export const saveCartAction = cart => ({ type: SET_CART, payload: cart });

export const cartLoadingAction = isLoading => ({ type: SET_CART_LOADING, payload: isLoading });

export const cartTotalPriceAction = totalPrice => ({ type: SET_CART_TOTAL_PRICE, payload: totalPrice });
