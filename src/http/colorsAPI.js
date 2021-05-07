import { $adminHost, $host } from './index';

// @route   POST /colors
// @desc    Create new color
// @access  Private
export const addColor = async () => {
  const res = await $adminHost.post('colors').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /colors
// @desc    Update existing color
// @access  Private
export const updateColor = async id => {
  const res = await $adminHost.put(`colors/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /colors/:id
// @desc    DELETE existing color
// @access  Private
export const deleteColor = async id => {
  const res = await $adminHost.delete(`colors/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /colors
// @desc    GET existing colors
// @access  Public
export const getColors = async () => {
  const res = await $host.get('colors').catch(err => {
    throw err;
  });
  return res;
};
