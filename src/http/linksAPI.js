import { $authHost, $host } from './index';

// @route   POST /links
// @desc    Create new links or links
// @access  Private
export const createNewLink = async () => {
  const { data } = await $authHost.post('links');
  return data;
};

// @route   PUT /links/:id
// @desc    Update existing links
// @access  Private
export const updateLinks = async id => {
  const { data } = await $authHost.put(`links/${id}`);
  return data;
};

// @route   DELETE /links/:id
// @desc    DELETE existing links
// @access  Private
export const deleteLinks = async id => {
  const { data } = await $authHost.delete(`links/${id}`);
  return data;
};

// @route   GET /links
// @desc    GET existing links
// @access  Public
export const getLinks = async () => {
  const { data } = await $host.get('links');
  return data;
};

// @route   GET /links/:id
// @desc    GET link by id
// @access  Public
export const getLinkById = async id => {
  const { data } = await $host.get(`links/${id}`);
  return data;
};
