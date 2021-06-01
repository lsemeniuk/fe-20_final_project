import { $authHost } from './index';

// @route   POST /cart
// @desc    Create cart
// @access  Private
export const createCart = async () => {
  const res = await $authHost.post('cart').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /cart
// @desc    Update cart when adding / deleting products in cart
// @access  Private
export const updateCart = async products => {
  const res = await $authHost.put('cart', products).catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /cart/:productId
// @desc    Add one product to cart
// @access  Private
export const addProductToCart = async productId => {
  const res = await $authHost.put(`cart/${productId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /cart
// @desc    Delete cart (when the order is placed or customer logging out)
// @access  Private
export const deleteCart = async () => {
  const res = await $authHost.delete('cart').catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /cart/:productId
// @desc    Delete one product from cart
// @access  Private
export const deleteProductFromCart = async productId => {
  const res = await $authHost.delete(`cart/${productId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /cart/product/:productId
// @desc    Delete one product from cart
// @access  Private
export const decreaseCartProductQuantity = async productId => {
  const res = await $authHost.delete(`cart/product/${productId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /cart
// @desc    Get cart for customer
// @access  Private
export const getCart = async () => {
  const res = await $authHost.get('cart').catch(err => {
    throw err;
  });
  return res;
};
