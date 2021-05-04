/* eslint-disable no-alert */
// import jwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

// @route   POST /customers
// @desc    Register customer
// @access  Public
export const createCustomer = async value => {
  const res = await $host.post('customers', value).catch(err => {
    alert(err.message);
  });
  return res;
};

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
export const loginCustomer = async value => {
  const res = await $host.post('customers/login', value).catch(err => {
    alert(err.message);
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
  const { data } = await $authHost.get('customers/customer').catch(err => {
    alert(err.message);
  });
  return data;
};

// @route   PUT /customers
// @desc    Update customer
// @access  Private
export const editCustomerInfo = async () => {
  const { data } = await $authHost.put('customers');
  return data;
};

// @route   POST /customers/profile/update-password
// @desc    Change password
// @access  Private
export const updatePassword = async () => {
  const { data } = await $authHost.put('customers/password');
  return data;
};
