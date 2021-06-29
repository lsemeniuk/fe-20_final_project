import { $authHost } from './index';

// @route   POST /images
// @desc    Create new image
// @access  Private
export const addImage = async values => {
  const res = await $authHost.post('images', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /images/:name
// @desc    Update existing image
// @access  Private
export const updateImage = async (name, values) => {
  const res = await $authHost.put(`images/${name}`, values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   DELETE /images/:id
// @desc    DELETE existing image
// @access  Private
export const deleteImage = async name => {
  const res = await $authHost.delete(`images/${name}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /images
// @desc    GET existing image
// @access  Private
export const getImages = async filters => {
  const filtersStr = new URLSearchParams(filters).toString();

  const res = await $authHost.get(`images?${filtersStr}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /images
// @desc    GET existing image
// @access  Private
export const getImageAffiliation = async filters => {
  const filtersStr = new URLSearchParams(filters).toString();

  const res = await $authHost.get(`images/affiliation?${filtersStr}`).catch(err => {
    throw err.response;
  });
  return res;
};
