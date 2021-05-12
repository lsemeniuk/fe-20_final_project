import { addProductToCart, decreaseCartProductQuantity, deleteProductFromCart, getCart } from '../../http/cartAPI';
import { calculateTotalPrice } from '../../utils/func';
import { saveModalCartAction } from '../modal/actions';
import { cartLoadingAction, cartTotalPriceAction, saveCartAction } from './actions';

// Получить всю корзину
export const getCartOperation = () => dispatch => {
  dispatch(cartLoadingAction(true));
  getCart().then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartLoadingAction(false));
    dispatch(cartTotalPriceAction(calculateTotalPrice(res.data)));
  });
};

// Уменьшить к-во товара в корзине
export const decreaseCartProductQuantityOperation = id => dispatch => {
  decreaseCartProductQuantity(id).then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartTotalPriceAction(calculateTotalPrice(res.data)));
  });
};

// Удалить товар из корзины
export const deleteProductFromCartOperation = (id, cart) => dispatch => {
  deleteProductFromCart(id).then(res => {
    if (cart.products.length === 1) {
      dispatch(saveCartAction(null));
      dispatch(saveModalCartAction(false));
    } else {
      dispatch(saveCartAction(res.data));
    }
  });
};

// Добавить товар в корзину
export const addProductToCartOperation = id => dispatch => {
  addProductToCart(id).then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartTotalPriceAction(calculateTotalPrice(res.data)));
  });
};
