import axios from 'axios';

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

export { $host, $authHost };
