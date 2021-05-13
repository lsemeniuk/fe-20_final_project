import { addProductToWishlist, deleteProductFromWishlist, getWishlist, deleteWishlist } from '../../http/wishlistAPI';
import { wishListLoadingAction, saveWishListAction } from './actions';
/* eslint-disable prefer-const */

export const getWishListOperation = () => dispatch => {
  dispatch(wishListLoadingAction(true));
  getWishlist().then(res => {
    dispatch(saveWishListAction(res.data));
    dispatch(wishListLoadingAction(false));
  });
};

export const addProductToWishlistOperation = id => dispatch => {
  addProductToWishlist(id).then(res => {
    dispatch(saveWishListAction(res.data));
  });
};

export const deleteProductFromWishlishtOperation = (id, wishList) => dispatch => {
  deleteProductFromWishlist(id).then(res => {
    if (wishList.products.length === 1) {
      dispatch(saveWishListAction(null));
    } else {
      dispatch(saveWishListAction(res.data));
    }
  });
};

export const deleteWishListOperation = () => dispatch => {
  deleteWishlist().then(res => {
    dispatch(saveWishListAction(null));
    return res;
  });
};
