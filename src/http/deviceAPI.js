import { $authHost, $host } from './index';

export const createType = async type => {
  // Создать тип продукта
};

export const fetchTypes = async () => {
  // Получить все типы
};

export const createBrand = async brand => {
  // Создать бренд продукта
};

export const fetchBrands = async () => {
  // Получить все бренды
};

export const createProduct = async device => {
  // Создать продукт
};

export const fetchProduct = async (typeId, brandId, page, limit = 5) => {
  // Получить все продукты
};

export const fetchOneProduct = async id => {
  // Получить один продукт по id
};
