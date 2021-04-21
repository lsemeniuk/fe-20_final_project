/* eslint-disable no-param-reassign */
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Базовые запросы для неавторизированных пользователей
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Базовые запросы для авторизированных пользователей
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Записываем во все авторизованные запросы токен в header
const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

// Базовые запросы для администратора

const $adminHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Записываем во все запросы администратора токен в header
const adminInterceptor = config => {
  const user = jwtDecode(localStorage.getItem('token'));
  if (user.isAdmin) {
    config.headers.authorization = localStorage.getItem('token');
    return config;
  }
  return user;
};

$adminHost.interceptors.request.use(adminInterceptor);

export { $host, $authHost, $adminHost };
