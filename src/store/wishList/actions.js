import { SET_WISHLIST, SET_WISHLIST_LOADING, CLEAR_WISH_LIST } from './types';

export const saveWishListAction = wishList => ({ type: SET_WISHLIST, payload: wishList });
export const wishListLoadingAction = isLoading => ({ type: SET_WISHLIST_LOADING, payload: isLoading });
export const clearWishList = wishList => ({ type: CLEAR_WISH_LIST, payload: wishList });
