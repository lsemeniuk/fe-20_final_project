import { SET_PAGES, SET_PAGES_LOADING } from './types';

export const savePagesAction = pages => ({ type: SET_PAGES, payload: pages });

export const pagesLoadingAction = isLoading => ({ type: SET_PAGES_LOADING, payload: isLoading });
