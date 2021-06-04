import { getColors } from '../../http/colorsAPI';
import { colorsLoadingAction, saveColorsAction } from './actions';

export const getColorsOperation = () => dispatch => {
  dispatch(colorsLoadingAction(true));
  getColors().then(res => {
    dispatch(saveColorsAction(res.data));
    dispatch(colorsLoadingAction(false));
  });
};
