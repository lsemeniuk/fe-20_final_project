import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from './types';

export const saveCategoriesAction = categories => ({ type: SET_CATEGORIES, payload: categories });

export const categoriesLoadingAction = isLoading => ({ type: SET_CATEGORIES_LOADING, payload: isLoading });
