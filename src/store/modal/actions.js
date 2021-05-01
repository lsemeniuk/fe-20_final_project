import { SET_MODAL_CART, SET_MODAL_AUTH_REG } from './types';

export const saveModalCartAction = bool => ({ type: SET_MODAL_CART, payload: bool });
export const saveModalAuthRegAction = bool => ({ type: SET_MODAL_AUTH_REG, payload: bool });
