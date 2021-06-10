import { SET_BRANDS, SET_BRANDS_LOADING } from './types';

export const saveBrandsAction = brands => ({ type: SET_BRANDS, payload: brands });

export const brandsLoadingAction = isLoading => ({ type: SET_BRANDS_LOADING, payload: isLoading });
