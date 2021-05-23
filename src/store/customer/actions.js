import { SET_CUSTOMER_ISAUTH, SET_CUSTOMER, SET_CUSTOMER_ISLOADING } from './types';

export const saveCustomerIsLoadingAction = isLoading => ({ type: SET_CUSTOMER_ISLOADING, payload: isLoading });
export const saveCustomerIsAuthAction = isAuth => ({ type: SET_CUSTOMER_ISAUTH, payload: isAuth });
export const saveCustomerAction = data => ({ type: SET_CUSTOMER, payload: data });
