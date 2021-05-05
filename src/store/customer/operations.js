import { createCustomer, getCustomer, loginCustomer } from '../../http/customersAPI';
import { saveModalAuthRegAction } from '../modal/actions';
import { saveCustomerAction, saveCustomerIsAuthAction } from './actions';

export const checkAuthOperation = () => dispatch => {
  getCustomer().then(res => {
    if (res) {
      dispatch(saveCustomerAction(res.data));
      dispatch(saveCustomerIsAuthAction(true));
    }
  });
};

export const authorizOperation = value => dispatch => {
  loginCustomer(value).then(res => {
    if (res) {
      dispatch(saveCustomerAction(res));
      dispatch(saveCustomerIsAuthAction(true));
      dispatch(saveModalAuthRegAction(false));
    }
  });
};

export const createCustomerOperation = ({ setTabIndex, ...value }) => dispatch => {
  createCustomer(value).then(res => {
    if (res) {
      dispatch(saveCustomerAction(res.data));
      // dispatch(saveModalAuthRegAction(false));
      setTabIndex(0);
    }
    return res;
  });
};
