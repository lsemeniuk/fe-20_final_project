import axios from 'axios';
import { ADD_TO_FAVORITES, CLEAR_FAVORITES, REMOVE_FROM_FAVORITES, LOAD_FAVORITES, SET_ISLOADING } from './types';

export const loadFavorites = () => dispatch => {
  dispatch({ type: SET_ISLOADING, payload: true });
  axios('/favorites-list.json').then(res => {
    dispatch({ type: LOAD_FAVORITES, payload: res.data });
    dispatch({ type: SET_ISLOADING, payload: false });
  });
};

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
