import { SET_MODAL_CART, SET_MODAL_AUTH_REG, SET_MODAL_POPUP } from './types';

export const saveModalCartAction = bool => {
  return { type: SET_MODAL_CART, payload: bool };
};
export const saveModalAuthRegAction = bool => {
  return { type: SET_MODAL_AUTH_REG, payload: bool };
};

export const saveModalPopupAction = bool => {
  return { type: SET_MODAL_POPUP, payload: bool };
};
