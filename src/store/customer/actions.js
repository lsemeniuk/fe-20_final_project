import { SET_CURRENT_CUSTOMMER } from './types';

export const saveCustomerAction = customer => ({ type: SET_CURRENT_CUSTOMMER, payload: customer });
