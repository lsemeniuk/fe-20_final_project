import { $authHost, $host } from './index';

// @route   POST /configs
// @desc    Create new config
// @access  Private
export const addConfig = async () => {
  const res = await $authHost.post('configs').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /configs/:customId
// @desc    Update existing config
// @access  Private
export const updateConfig = async customId => {
  const res = await $authHost.put(`configs/${customId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /configs/:customId
// @desc    DELETE existing config
// @access  Private
export const deleteConfig = async customId => {
  const res = await $authHost.delete(`configs/${customId}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /configs
// @desc    GET existing configs
// @access  Public
export const getConfigs = async () => {
  const res = await $host.get('configs').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /configs/:customId
// @desc    GET existing configs
// @access  Public
export const getConfigById = async customId => {
  const res = await $host.get(`configs/${customId}`).catch(err => {
    throw err;
  });
  return res;
};
