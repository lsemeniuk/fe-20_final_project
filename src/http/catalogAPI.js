import { $adminHost, $host } from './index';

// @route   POST /catalog
// @desc    Create new category
// @access  Private
export const addCategory = async () => {
  const res = await $adminHost.post('catalog').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /catalog/:id
// @desc    Update existing category
// @access  Private
export const aupdateCategory = async id => {
  const res = await $adminHost.put(`catalog/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /catalog/:id
// @desc    Delete existing category
// @access  Private
export const deleteCategory = async id => {
  const res = await $adminHost.delete(`catalog/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /catalog
// @desc    GET existing categories
// @access  Public
export const getCategories = async () => {
  const res = await $host.get('catalog').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /catalog/:id
// @desc    GET existing categorie
// @access  Public
export const getCategory = async id => {
  const res = await $host.get(`catalog/${id}`).catch(err => {
    throw err;
  });
  return res;
};
