import { $authHost, $host } from './index';

// @route   POST /comments
// @desc    Add new comments
// @access  Private
export const addComment = async () => {
  const { data } = await $authHost.post('comments');
  return data;
};

// @route   PUT /comments/:id
// @desc    Update existing comment
// @access  Private
export const updateComment = async id => {
  const { data } = await $authHost.put(`comments/${id}`);
  return data;
};

// @route   DELETE /comments/:id
// @desc    Delete existing comment
// @access  Private
export const deleteComment = async id => {
  const { data } = await $authHost.delete(`comments/${id}`);
  return data;
};

// @route   GET /comments
// @desc    GET existing comments
// @access  Public
export const getComments = async () => {
  const { data } = await $host.get('comments');
  return data;
};

// @route   GET /comments/:customerId
// @desc    GET existing comments of particular customer
// @access  Public
export const getCustomerComments = async customerId => {
  const { data } = await $host.get(`comments/${customerId}`);
  return data;
};

// @route   GET /comments/:productId
// @desc    GET existing comments of particular product
// @access  Public
export const getProductComments = async productId => {
  const { data } = await $host.get(`comments/${productId}`);
  return data;
};
