import { getCartOperation, setCartTotalPriceOperation, updateCartOperation } from './cart/operations';
import { getCatalogOperation } from './catalog/operations';
import { getColorsOperation } from './colors/operations';
import { getProductsOperation } from './products/operations';
import { wishListLoadingAction } from './wishList/actions';
import { getWishListOperation, updateWishListOperation } from './wishList/operations';

export const getDataOperation = isAuth => dispatch => {
  const storageWishList = { products: JSON.parse(localStorage.getItem('WishList')) || [] };
  const localCart = JSON.parse(localStorage.getItem('cart'));

  dispatch(getCatalogOperation());
  dispatch(getProductsOperation());
  dispatch(wishListLoadingAction(true));
  dispatch(getColorsOperation());
  if (isAuth) {
    dispatch(getWishListOperation());
    dispatch(updateWishListOperation(storageWishList));
    if (localCart) {
      dispatch(updateCartOperation(localCart));
    } else {
      dispatch(getCartOperation());
    }
  } else {
    dispatch(setCartTotalPriceOperation(localCart));
  }
};
