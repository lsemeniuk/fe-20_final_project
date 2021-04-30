import axios from 'axios';
import { LOAD_PROFILE } from './types';

export const loadCustomerProfile = () => dispatch => {
  axios('/customer-profile.json').then(res => {
    dispatch({ type: LOAD_PROFILE, payload: res.data });
  });
};
