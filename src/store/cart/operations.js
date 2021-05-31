/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
import {
  addProductToCart,
  decreaseCartProductQuantity,
  deleteProductFromCart,
  getCart,
  updateCart,
} from '../../http/cartAPI';
import { calculateTotalPrice } from '../../utils/func';
import { saveModalCartAction } from '../modal/actions';
import { cartLoadingAction, cartTotalPriceAction, saveCartAction, saveLocalCartAction } from './actions';

// Получить всю корзину
export const getCartOperation = () => dispatch => {
  dispatch(cartLoadingAction(true));
  getCart().then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartLoadingAction(false));
    dispatch(cartTotalPriceAction(calculateTotalPrice(res.data)));
    if (res.data) {
      const databaseCart = res.data.products.map(productCart => {
        return { cartQuantity: productCart.cartQuantity, product: productCart.product['_id'] };
      });

      localStorage.setItem('cart', JSON.stringify({ products: [...databaseCart] }));
    } else {
      localStorage.setItem('cart', JSON.stringify({}));
    }
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

export const updateCartOperation = products => dispatch => {
  dispatch(cartLoadingAction(true));
  updateCart(products).then(res => {
    dispatch(saveCartAction(res.data));
    dispatch(cartLoadingAction(false));
    dispatch(cartTotalPriceAction(calculateTotalPrice(res.data)));
  });
};

export const changeLocalCartOperation = (id, method) => dispatch => {
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const newLocalCart = localCart.products.map(product => {
    if (product?.product === id) {
      if (method === 'decrease') {
        product.cartQuantity -= 1;
      } else if (method === 'add') {
        product.cartQuantity += 1;
      } else if (method === 'delete') {
        return null;
      }
    }
    return product;
  });

  const filtered = newLocalCart.filter(el => {
    return el != null;
  });

  localStorage.setItem('cart', JSON.stringify({ products: [...filtered] }));

  dispatch(saveLocalCartAction({ products: [...filtered] }));
};
