import axios from 'axios';
import { SET_ISLOADING, SET_CUSTOMER_ISAUTH, SET_CUSTOMER } from './types';

export const loadCustomerProfile = () => dispatch => {
  dispatch({ type: SET_ISLOADING, payload: true });
  axios('/customer-profile.json').then(res => {
    dispatch({ type: SET_CUSTOMER, payload: res.data });
    dispatch({ type: SET_ISLOADING, payload: false });
  });
};

export const saveCustomerIsAuthAction = isAuth => ({ type: SET_CUSTOMER_ISAUTH, payload: isAuth });
export const saveCustomerAction = data => ({ type: SET_CUSTOMER, payload: data });
