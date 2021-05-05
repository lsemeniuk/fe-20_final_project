import { $authHost } from './index';

// @route   POST /pages
// @desc    Create new links or page
// @access  Private
export const createLinkPageOnPage = async () => {
  const { data } = await $authHost.post('pages');
  return data;
};

// @route   PUT /pages/:id
// @desc    Update existing page
// @access  Private
export const updatePage = async id => {
  const { data } = await $authHost.put(`pages/${id}`);
  return data;
};

// @route   DELETE /pages/:id
// @desc    Delete existing page
// @access  Private
export const deletePage = async id => {
  const { data } = await $authHost.delete(`pages/${id}`);
  return data;
};

// @route   GET /pages
// @desc    GET existing page
// @access  Public
export const getPage = async () => {
  const { data } = await $authHost.get('pages');
  return data;
};
