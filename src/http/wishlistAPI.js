import { $authHost } from './index';

// @route   POST /wishlist
// @desc    Create wishlist
// @access  Private
export const createWishlist = async () => {
  const res = await $authHost.post('wishlist').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /wishlist
// @desc    Update wishlist when adding / deleting products in wishlist
// @access  Private
export const updateWishlist = async () => {
  const res = await $authHost.put('wishlist').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /wishlist/:productId
// @desc    Add one product to wishlist
// @access  Private
export const addProductToWishlist = async productId => {
  const res = await $authHost.put(`wishlist/${productId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /wishlist
// @desc    Delete wishlist
// @access  Private
export const deleteWishlist = async () => {
  const res = await $authHost.delete('wishlist').catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /wishlist/:productId
// @desc    Delete one product from wishlist
// @access  Private
export const deleteProductFromWishlist = async productId => {
  const res = await $authHost.delete(`wishlist/${productId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /wishlist
// @desc    Get wishlist for customer
// @access  Private
export const getWishlist = async () => {
  const res = await $authHost.get('wishlist').catch(err => {
    throw err;
  });
  return res;
};
