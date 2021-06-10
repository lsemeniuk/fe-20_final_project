import { SET_COLORS, SET_COLORS_LOADING } from './types';

export const saveColorsAction = colors => ({ type: SET_COLORS, payload: colors });

export const colorsLoadingAction = isLoading => ({ type: SET_COLORS_LOADING, payload: isLoading });
