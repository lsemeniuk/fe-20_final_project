import { createCustomer, getCustomer, loginCustomer } from '../../http/customersAPI';
import { saveCartAction } from '../cart/actions';
import { saveWishListAction } from '../wishList/actions';
import { saveModalAuthRegAction } from '../modal/actions';
import { saveCustomerAction, saveCustomerIsAuthAction, saveCustomerIsLoadingAction } from './actions';
import { popupOpenOperation } from '../modal/operations';

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
      dispatch(saveCustomerIsLoadingAction(false));
      return err;
    });
};

export const authorizOperation = value => dispatch => {
  dispatch(saveCustomerIsLoadingAction(true));
  loginCustomer(value)
    .then(res => {
      dispatch(
        popupOpenOperation(`Доброго времени суток ${res.data.customer.firstName} ${res.data.customer.lastName}!`)
      );
      dispatch(saveCustomerAction(res.data.customer));
      dispatch(saveCustomerIsAuthAction(true));
      dispatch(saveModalAuthRegAction(false));
    })
    .catch(err => {
      const message = Object.values(err.data).join('');
      dispatch(popupOpenOperation(message, true));
    });
  dispatch(saveCustomerIsLoadingAction(false));
};

export const createCustomerOperation = value => dispatch => {
  createCustomer(value)
    .then(res => {
      dispatch(popupOpenOperation(res.data.message));
      dispatch(saveModalAuthRegAction(false));
    })
    .catch(err => {
      const message = Object.values(err.data).join('');
      dispatch(popupOpenOperation(message, true));
    });
};

export const outPutCustomerOperation = () => dispatch => {
  dispatch(saveCustomerAction({}));
  dispatch(saveWishListAction(null));
  dispatch(saveCartAction(null));
  dispatch(saveCustomerIsAuthAction(false));
  localStorage.setItem('token', '');
};
