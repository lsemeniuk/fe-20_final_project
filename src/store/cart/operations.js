import { addProductToCart, decreaseCartProductQuantity, deleteProductFromCart, getCart } from '../../http/cartAPI';
import { cartLoadingAction, saveCartAction } from './actions';

// Получить всю корзину
export const getCartOperation = () => dispatch => {
  dispatch(cartLoadingAction(true));
  getCart().then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartLoadingAction(false));
  });
};

// Уменьшить к-во товара в корзине
export const decreaseCartProductQuantityOperation = id => dispatch => {
  decreaseCartProductQuantity(id).then(res => {
    dispatch(saveCartAction(res.data));
  });
};

// Удалить товар из корзины
export const deleteProductFromCartOperation = id => dispatch => {
  deleteProductFromCart(id).then(res => {
    dispatch(saveCartAction(res.data));
  });
};

// Добавить товар в корзину
export const addProductToCartOperation = id => dispatch => {
  addProductToCart(id).then(res => {
    dispatch(saveCartAction(res.data));
  });
};
