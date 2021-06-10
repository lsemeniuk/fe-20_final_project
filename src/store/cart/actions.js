import { SET_CART, SET_LOCAL_CART, SET_CART_LOADING, SET_CART_TOTAL_PRICE, SET_DELIVERY_METHOD } from './types';

export const saveCartAction = cart => ({ type: SET_CART, payload: cart });

export const saveLocalCartAction = cart => ({ type: SET_LOCAL_CART, payload: cart });

export const cartLoadingAction = isLoading => ({ type: SET_CART_LOADING, payload: isLoading });

export const cartTotalPriceAction = totalPrice => ({ type: SET_CART_TOTAL_PRICE, payload: totalPrice });

export const deliveryMethodAction = deliveryMethod => ({ type: SET_DELIVERY_METHOD, payload: deliveryMethod });
