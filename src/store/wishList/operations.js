/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
import {
  addProductToWishlist,
  deleteProductFromWishlist,
  getWishlist,
  deleteWishlist,
  updateWishlist,
} from '../../http/wishlistAPI';
import { wishListLoadingAction, saveWishListAction } from './actions';
import { getProductById } from '../../http/productAPI';

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
  const storageId = storageWishList.map(itemData => itemData.id);
  getWishlist().then(res => {
    if (res.data && res.data.products) {
      dbWishList = res.data.products.map(item => {
        return item['_id'];
      });

      if (storageWishList) {
        const newItem = storageId.filter(id => !dbWishList.includes(id));
        wishList.products = dbWishList.concat(newItem);
        updateWishlist(wishList).then(products => {
          dispatch(saveWishListAction(products.data));
          return products;
        });
      }
    } else {
      updateWishlist(wishList).then(products => {
        dispatch(saveWishListAction(products.data));
        return res;
      });
    }
  });
};

export const setFavForCustomerOperation = (itemNo, wishList) => dispatch => {
  getProductById(itemNo).then(product => {
    const { data } = product;
    dispatch(saveWishListAction([...wishList, data]));
  });
};
