import { $authHost, $host } from './index';

// @route   POST /errors
// @desc    Create new error
// @access  Public
export const addError = async values => {
  const res = await $host.post('error', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   DELETE /errors/:id
// @desc    DELETE existing error
// @access  Private
export const deleteError = async customId => {
  const res = await $authHost.delete(`error/${customId}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /errors
// @desc    GET existing error
// @access  Private
export const getErrors = async () => {
  const res = await $authHost.get('error').catch(err => {
    throw err.response;
  });
  return res;
};
