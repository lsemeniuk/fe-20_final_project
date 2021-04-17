import { SET_CURRENT_USER } from './types';

export const saveUserAction = user => ({ type: SET_CURRENT_USER, payload: user });
