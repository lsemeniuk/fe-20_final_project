/* eslint-disable no-undef */
import reducer from './reducer';
import { SET_CUSTOMER_ISAUTH, SET_CUSTOMER } from './types';

const initialState = {
  isAuth: false,
  data: {},
};

const testCustomer = {
  firstName: 'Customer',
  lastName: 'Newone',
  login: 'Customer',
  email: 'customer@gmail.com',
  password: '1111111',
  telephone: '+380630000000',
  gender: 'male',
  avatarUrl: 'img/customers/023648.png',
  isAdmin: true,
};

describe('Testing customer reducer', () => {
  test('Testing SET_CUSTOMER_ISAUTH', () => {
    const action = { type: SET_CUSTOMER_ISAUTH, payload: true };
    const newState = reducer(initialState, action);

    expect(newState.isAuth).toBeTruthy();
    const toogleState = reducer(newState, { type: SET_CUSTOMER_ISAUTH, payload: false });
    expect(toogleState.isAuth).toBeFalsy();
  });

  test('Testing SET_CUSTOMER_ISAUTH', () => {
    const action = { type: SET_CUSTOMER, payload: testCustomer };
    const newState = reducer(initialState, action);

    expect(newState.data).toBe(testCustomer);
    expect(newState.data.firstName).toEqual('Customer');

    const removeState = reducer(newState, { type: SET_CUSTOMER, payload: undefined });
    expect(removeState.data).toBe(undefined);
  });
});
