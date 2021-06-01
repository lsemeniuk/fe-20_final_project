import { $authHost, $host } from './index';

// @route   POST /brands
// @desc    Create new brand
// @access  Private
export const addBrand = async values => {
  const res = await $authHost.post('brands', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /brands/:id
// @desc    Update existing brand
// @access  Private
export const updateBrand = async (id, values) => {
  const res = await $authHost.put(`brands/${id}`, values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   DELETE /brands/:id
// @desc    DELETE existing brand
// @access  Private
export const deleteBrand = async customId => {
  const res = await $authHost.delete(`brands/${customId}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /brands
// @desc    GET existing brand
// @access  Public
export const getBrands = async () => {
  const res = await $host.get('brands').catch(err => {
    throw err.response;
  });
  return res;
};
