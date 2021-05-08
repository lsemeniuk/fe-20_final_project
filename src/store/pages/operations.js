import { getPage } from '../../http/pagesApi';
import { pageLoadingAction, savePageAction } from './actions';

export const getBrandsOperation = customId => dispatch => {
  dispatch(pageLoadingAction(true));
  getPage(customId).then(res => {
    dispatch(savePageAction(res.data));
    dispatch(pageLoadingAction(false));
  });
};
