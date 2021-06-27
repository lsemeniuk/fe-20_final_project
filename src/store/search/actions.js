import { SET_QUERY } from './types';

export const setQueryAction = brand => {
  return { type: SET_QUERY, payload: brand };
};
