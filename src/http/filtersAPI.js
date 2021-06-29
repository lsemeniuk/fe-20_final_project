import { $authHost, $host } from './index';

// @route   POST /filters
// @desc    Create new filter
// @access  Private
export const createNewFilter = async values => {
  const res = await $authHost.post('filters', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /filters/:id
// @desc    Update existing filter
// @access  Private
export const updateFilter = async (id, values) => {
  const res = await $authHost.put(`filters/${id}`, values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   DELETE /filters/:id
// @desc    DELETE existing filter
// @access  Private
export const deleteFilter = async id => {
  const res = await $authHost.delete(`filters/${id}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /filters
// @desc    GET existing filters
// @access  Public
export const getFilters = async () => {
  const res = await $host.get('filters').catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /filters/:type
// @desc    GET existing filters by "type" field
// @access  Public
export const getFilterByType = async type => {
  const res = await $host.get(`filters/${type}`).catch(err => {
    throw err.response;
  });
  return res;
};
