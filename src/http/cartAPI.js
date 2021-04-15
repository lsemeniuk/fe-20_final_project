import { $authHost } from './index';

// @route   POST /cart
// @desc    Create cart
// @access  Private
export const createCart = async () => {
  const { data } = await $authHost.post('cart');
  return data;
};

// @route   PUT /cart
// @desc    Update cart when adding / deleting products in cart
// @access  Private
export const updateCart = async (email, password) => {
  const { data } = await $authHost.put('cart');
  return data;
};

// @route   PUT /cart/:productId
// @desc    Add one product to cart
// @access  Private
export const addProductToCart = async productId => {
  const { data } = await $authHost.put('cart/' + productId);
  return data;
};

// @route   DELETE /cart
// @desc    Delete cart (when the order is placed or customer logging out)
// @access  Private
export const deleteCart = async () => {
  const { data } = await $authHost.delete('cart');
  return data;
};

// @route   DELETE /cart/:productId
// @desc    Delete one product from cart
// @access  Private
export const deleteProductFromCart = async productId => {
  const { data } = await $authHost.delete('cart/' + productId);
  return data;
};

// @route   DELETE /cart/product/:productId
// @desc    Delete one product from cart
// @access  Private
export const decreaseCartProductQuantity = async () => {
  const { data } = await $authHost.delete('cart/product/' + productId);
  return data;
};

// @route   GET /cart
// @desc    Get cart for customer
// @access  Private
export const getCart = async () => {
  const { data } = await $authHost.get('cart');
  return data;
};
