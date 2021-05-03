import { ADD_TO_FAVORITES, CLEAR_FAVORITES, REMOVE_FROM_FAVORITES } from './types';

export const addToFavoritesAction = product => {
  return {
    type: ADD_TO_FAVORITES,
    payload: product,
  };
};
export const removeFromFavoritesAction = ID => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: ID,
  };
};
export const clearFavoritesAction = () => {
  return {
    type: CLEAR_FAVORITES,
  };
};
