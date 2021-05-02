import axios from 'axios';
import { LOAD_PROFILE, SET_ISLOADING } from './types';

export const loadCustomerProfile = () => dispatch => {
  dispatch({ type: SET_ISLOADING, payload: true });
  axios('/customer-profile.json').then(res => {
    dispatch({ type: LOAD_PROFILE, payload: res.data });
    dispatch({ type: SET_ISLOADING, payload: false });
  });
};
