import { $adminHost, $host } from './index';

// @route   POST /brands
// @desc    Create new brand
// @access  Private
export const addBrand = async () => {
  const res = await $adminHost.post('brands').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /brands/:id
// @desc    Update existing brand
// @access  Private
export const updateBrand = async id => {
  const res = await $adminHost.put(`brands/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /brands/:id
// @desc    DELETE existing brand
// @access  Private
export const deleteBrand = async id => {
  const res = await $adminHost.delete(`brands/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /brands
// @desc    GET existing brand
// @access  Public
export const getBrands = async () => {
  const res = await $host.get('brands').catch(err => {
    throw err;
  });
  return res;
};
