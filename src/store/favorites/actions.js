import axios from 'axios';
import {
  FAVORITES_ADD_ITEM,
  FAVORITES_CLEAR,
  FAVORITES_LOAD,
  FAVORITES_REMOVE_ITEM,
  FAVORITES_SET_ISLOADING,
} from './types';

export const loadFavorites = () => dispatch => {
  dispatch({ type: FAVORITES_SET_ISLOADING, payload: true });
  axios('/favorites-list.json').then(res => {
    dispatch({ type: FAVORITES_LOAD, payload: res.data });
    dispatch({ type: FAVORITES_SET_ISLOADING, payload: false });
  });
};

export const addToFavoritesAction = product => {
  return {
    type: FAVORITES_ADD_ITEM,
    payload: product,
  };
};
export const removeFromFavoritesAction = ID => {
  return {
    type: FAVORITES_REMOVE_ITEM,
    payload: ID,
  };
};
export const clearFavoritesAction = () => {
  return {
    type: FAVORITES_CLEAR,
  };
};
