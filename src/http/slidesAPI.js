import { $adminHost, $host } from './index';

// @route   POST /slides
// @desc    Create new slide
// @access  Private
export const addSlide = async () => {
  const res = await $adminHost.post('slides').catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /slides/:id
// @desc    Update existing slide
// @access  Private
export const updateSlide = async id => {
  const res = await $adminHost.put(`slides/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /slides/:id
// @desc    Delete existing slide
// @access  Private
export const deleteSlide = async id => {
  const res = await $adminHost.delete(`slides/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /slides
// @desc    GET existing slides
// @access  Public
export const getSlides = async () => {
  const res = await $host.get('slides').catch(err => {
    throw err;
  });
  return res;
};
