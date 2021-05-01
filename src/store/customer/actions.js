import { SET_CUSTOMMER_ISAUTH, SET_CUSTOMMER } from './types';

export const saveCustomerIsAuthAction = isAuth => ({ type: SET_CUSTOMMER_ISAUTH, payload: isAuth });
export const saveCustomerAction = data => ({ type: SET_CUSTOMMER, payload: data });
