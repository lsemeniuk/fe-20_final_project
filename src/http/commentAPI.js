import { $authHost, $host } from './index';

// @route   POST /comments
// @desc    Add new comments
// @access  Private
export const addComment = async value => {
  const res = await $authHost.post('comments', value).catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /comments/:id
// @desc    Update existing comment
// @access  Private
export const updateComment = async (id, value) => {
  const res = await $authHost.put(`comments/${id}`, value).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /comments/:id
// @desc    Delete existing comment
// @access  Private
export const deleteComment = async id => {
  const res = await $authHost.delete(`comments/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /comments
// @desc    GET existing comments
// @access  Public
export const getComments = async () => {
  const res = await $host.get('comments').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /comments/:customerId
// @desc    GET existing comments of particular customer
// @access  Public
export const getCustomerComments = async customerId => {
  const res = await $host.get(`comments/${customerId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /comments/:productId
// @desc    GET existing comments of particular product
// @access  Public
export const getProductComments = async productId => {
  const res = await $host.get(`comments/${productId}`).catch(err => {
    throw err;
  });
  return res;
};
