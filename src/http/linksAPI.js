import { $adminHost, $host } from './index';

// @route   POST /links
// @desc    Create new links or links
// @access  Private
export const addLinks = async () => {
  const res = await $adminHost.post('links').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /links/:id
// @desc    Update existing links
// @access  Private
export const updateLinks = async id => {
  const res = await $adminHost.put(`links/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /links/:id
// @desc    DELETE existing links
// @access  Private
export const deleteLinks = async id => {
  const res = await $adminHost.delete(`links/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /links
// @desc    GET existing links
// @access  Public
export const getLinks = async () => {
  const res = await $host.get('links').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /links/:id
// @desc    GET link by id
// @access  Public
export const getLink = async id => {
  const res = await $host.get(`links/${id}`).catch(err => {
    throw err;
  });
  return res;
};
