import { $adminHost, $host } from './index';

// @route   POST /catalog
// @desc    Create new category
// @access  Private
export const addCategory = async () => {
  const { data } = await $adminHost.post('catalog');
  return data;
};

// @route   PUT /catalog/:id
// @desc    Update existing category
// @access  Private
export const aupdateCategory = async id => {
  const { data } = await $adminHost.put('catalog/' + id);
  return data;
};

// @route   DELETE /catalog/:id
// @desc    Delete existing category
// @access  Private
export const deleteCategory = async id => {
  const { data } = await $adminHost.delete('catalog/' + id);
  return data;
};

// @route   GET /catalog
// @desc    GET existing categories
// @access  Public
export const getCategories = async () => {
  const { data } = await $host.get('catalog');
  return data;
};

// @route   GET /catalog/:id
// @desc    GET existing categorie
// @access  Public
export const getCategory = async id => {
  const { data } = await $host.get('catalog/' + id);
  return data;
};
