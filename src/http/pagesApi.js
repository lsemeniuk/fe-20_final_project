import { $authHost, $host } from './index';

// @route   POST /pages
// @desc    Create new links or page
// @access  Private
export const addPage = async () => {
  const res = await $authHost.post('pages').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /pages/:id
// @desc    Update existing page
// @access  Private
export const updatePage = async customId => {
  const res = await $authHost.put(`pages/${customId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /pages/:id
// @desc    Delete existing page
// @access  Private
export const deletePage = async customId => {
  const res = await $authHost.delete(`pages/${customId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /pages
// @desc    GET existing page
// @access  Public
export const getPage = async customId => {
  const res = await $host.get(`pages/${customId}`).catch(err => {
    throw err;
  });
  return res;
};
