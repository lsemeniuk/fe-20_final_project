import { getPage } from '../../http/pagesAPI';
import { pagesLoadingAction, savePagesAction } from './actions';

export const getBrandsOperation = customId => dispatch => {
  getPage(customId).then(res => {
    dispatch(savePagesAction(res.data));
    dispatch(pagesLoadingAction(false));
  });
};
