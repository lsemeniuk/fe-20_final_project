/* eslint-disable no-console */
import { $authHost, $host } from './index';

// @route   POST /customers
// @desc    Register customer
// @access  Public
export const createCustomer = async value => {
  const res = await $host.post('customers', value).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers
// @desc    Register customer
// @access  Public
export const confirmRegistration = async token => {
  const res = await $host.post(`customers/confirm-registration/${token}`).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
export const loginCustomer = async value => {
  const res = await $host.post('customers/login', value).catch(err => {
    throw err.response;
  });
  if (res) {
    localStorage.setItem('token', res.data.token);
  }
  return res;
};

// @route   GET /
// @desc    Return current customer
// @access  Private
export const getCustomer = async () => {
  const res = await $authHost.get('customers/customer').catch(err => {
    throw err.response;
  });
  return res;
};

// @route   PUT /customers
// @desc    Update customer
// @access  Private
export const editCustomerInfo = async values => {
  const res = await $authHost.put('customers', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/profile/update-password
// @desc    Change password
// @access  Private
export const updatePassword = async values => {
  const res = await $authHost.put('customers/password', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/profile/forgot-password
// @desc    Email a link to reset your password
// @access  Public
export const forgotPassword = async values => {
  const res = await $host.post('customers/forgot', values).catch(err => {
    throw err.response;
  });
  return res;
};

// @route   POST /customers/profile/reset-password
// @desc    Password reset
// @access  Public
export const resetPassword = async (token, values) => {
  const res = await $host.post(`customers/reset/${token}`, values).catch(err => {
    throw err.response;
  });
  return res;
};
