import { $authHost, $host } from './index';

// @route   POST /filters
// @desc    Create new filter
// @access  Private
export const createNewFilter = async () => {
  const { data } = await $authHost.post('filters');
  return data;
};

// @route   PUT /filters/:id
// @desc    Update existing filter
// @access  Private
export const updateFilter = async id => {
  const { data } = await $authHost.put(`filters/${id}`);
  return data;
};

// @route   DELETE /filters/:id
// @desc    DELETE existing filter
// @access  Private
export const deleteFilter = async id => {
  const { data } = await $authHost.delete(`filters/${id}`);
  return data;
};

// @route   GET /filters
// @desc    GET existing filters
// @access  Public
export const getFilters = async () => {
  const { data } = await $host.get('filters');
  return data;
};

// @route   GET /filters/:type
// @desc    GET existing filters by "type" field
// @access  Public
export const getFilterByType = async type => {
  const { data } = await $host.get(`filters/${type}`);
  return data;
};
