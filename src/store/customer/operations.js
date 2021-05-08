/* eslint-disable no-console */
import { createCustomer, getCustomer, loginCustomer } from '../../http/customersAPI';
import { saveModalAuthRegAction } from '../modal/actions';
import { saveCustomerAction, saveCustomerIsAuthAction, saveCustomerIsLoadingAction } from './actions';

export const checkAuthOperation = () => dispatch => {
  dispatch(saveCustomerIsLoadingAction(true));
  getCustomer()
    .then(res => {
      if (res) {
        dispatch(saveCustomerAction(res.data));
        dispatch(saveCustomerIsAuthAction(true));
        dispatch(saveCustomerIsLoadingAction(false));
      }
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const authorizOperation = ({ setmessageServer, ...value }) => dispatch => {
  loginCustomer(value)
    .then(res => {
      // if (res) {
      dispatch(saveCustomerAction(res));
      dispatch(saveCustomerIsAuthAction(true));
      dispatch(saveModalAuthRegAction(false));
      // }
    })
    .catch(err => {
      setmessageServer(err.data.loginOrEmail || err.data.password);
    });
};

export const createCustomerOperation = ({ setTabIndex, ...value }) => dispatch => {
  createCustomer(value)
    .then(res => {
      if (res) {
        dispatch(saveCustomerAction(res.data));
        setTabIndex(0);
      }
      return res;
    })
    .catch(err => {
      console.log(err.response);
    });
};
