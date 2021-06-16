import { $authHost, $host } from './index';

// @route   POST /products/images
// @desc    Add images
// @access  Private
export const addImages = async () => {
  const res = await $authHost.post('products/images').catch(err => {
    throw err;
  });
  return res;
};

// @route   POST /products
// @desc    Create new product
// @access  Private
export const addProduct = async () => {
  const res = await $authHost.post('products').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /products/:id
// @desc    Update existing product
// @access  Private
export const updateProduct = async id => {
  const res = await $authHost.put(`products/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /products
// @desc    GET existing products
// @access  Public
export const getProducts = async () => {
  const res = await $host.get('products').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /products/filter
// @desc    GET appropriate filtered products
// @access  Public
export const getProductsFilterParams = async filters => {
  const filtersStr = new URLSearchParams(filters).toString();

  const res = await $host.get(`products/filter?${filtersStr}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   POST /products/search
// @desc    POST appropriate to search query products
// @access  Public
export const searchProducts = async searchPhrases => {
  const res = await $host.post('products/search', searchPhrases).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /products/:id
// @desc    GET existing product by id
// @access  Public
export const getProductById = async itemNo => {
  const res = await $host.get(`products/${itemNo}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   POST /products/color
// @desc    POST existing product by color
// @access  Public
export const getProductByColor = async value => {
  const res = await $host.post('products/color', value).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /products/array
// @desc    POST existing product by array id
// @access  Public
export const getProductsByArrayId = async value => {
  const res = await $host.post('products/array', value).catch(err => {
    throw err.response;
  });
  return res;
};
