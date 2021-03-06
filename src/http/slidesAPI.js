import { $authHost, $host } from './index';

// @route   POST /slides
// @desc    Create new slide
// @access  Private
export const addSlide = async values => {
  const res = await $authHost.post('slides', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /slides/:id
// @desc    Update existing slide
// @access  Private
export const updateSlide = async (id, values) => {
  const res = await $authHost.put(`slides/${id}`, values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   DELETE /slides/:id
// @desc    Delete existing slide
// @access  Private
export const deleteSlide = async id => {
  const res = await $authHost.delete(`slides/${id}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   GET /slides
// @desc    GET existing slides
// @access  Public
export const getSlides = async () => {
  const res = await $host.get('slides').catch(err => {
    throw err.response;
  });
  return res;
};
