import { SET_WISHLIST, SET_WISHLIST_LOADING } from './types';

export const saveWishListAction = wishList => ({ type: SET_WISHLIST, payload: wishList });
export const wishListLoadingAction = isLoading => ({ type: SET_WISHLIST_LOADING, payload: isLoading });
