/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import {
  addProductToWishlist,
  deleteProductFromWishlist,
  getWishlist,
  deleteWishlist,
  updateWishlist,
} from '../../http/wishlistAPI';
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
  dispatch(saveWishListAction(null));
  deleteWishlist().then(res => {
    return res;
  });
};

export const updateWishListOperation = prod => dispatch => {
  dispatch(wishListLoadingAction(true));
  let dbWishList = [];
  let wishList = { products: [] };
  const storageWishList = prod.products;

  getWishlist().then(res => {
    if (res.data && res.data.products) {
      dbWishList = res.data.products.map(item => {
        return item['_id'];
      });

      if (storageWishList) {
        const newItem = storageWishList.filter(id => !dbWishList.includes(id));
        console.log(newItem);
        wishList.products = dbWishList.concat(newItem);
        updateWishlist(wishList).then(products => {
          dispatch(saveWishListAction(products.data));
          return products;
        });
      }
    } else {
      updateWishlist(prod).then(products => {
        dispatch(saveWishListAction(products.data));
        return res;
      });
    }
  });
};
