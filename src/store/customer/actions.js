import { SET_CUSTOMER_ISAUTH, SET_CUSTOMER } from './types';

export const saveCustomerIsAuthAction = isAuth => ({ type: SET_CUSTOMER_ISAUTH, payload: isAuth });
export const saveCustomerAction = data => ({ type: SET_CUSTOMER, payload: data });
