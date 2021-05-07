import axios from 'axios';
import { SET_ISLOADING, SET_CUSTOMMER_ISAUTH, SET_CUSTOMMER } from './types';

export const loadCustomerProfile = () => dispatch => {
  dispatch({ type: SET_ISLOADING, payload: true });
  axios('/customer-profile.json').then(res => {
    dispatch({ type: SET_CUSTOMMER, payload: res.data });
    dispatch({ type: SET_ISLOADING, payload: false });
    localStorage.setItem('customer', JSON.stringify(res.data));
  });
};
export const saveCustomerIsAuthAction = isAuth => ({ type: SET_CUSTOMMER_ISAUTH, payload: isAuth });
export const saveCustomerAction = data => ({ type: SET_CUSTOMMER, payload: data });
