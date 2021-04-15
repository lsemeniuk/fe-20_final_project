import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

// @route   POST /customers
// @desc    Register customer
// @access  Public
export const createCustomer = async () => {
  const { data } = await $host.post('customers');
  return data;
};

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
export const loginCustomer = async (loginOrEmail, password) => {
  const { data } = await $host.post('customers/login', {});
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

// @route   GET /
// @desc    Return current customer
// @access  Private
export const getCustomer = async () => {
  const { data } = await $authHost.get('customers/customer');
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
