import { SET_PAGE, SET_PAGE_LOADING } from './types';

export const savePageAction = page => ({ type: SET_PAGE, payload: page });

export const pageLoadingAction = isLoading => ({ type: SET_PAGE_LOADING, payload: isLoading });
