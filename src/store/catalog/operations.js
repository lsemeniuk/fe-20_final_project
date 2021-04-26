import { getCategories } from '../../http/catalogAPI';
import { categoriesLoadingAction, saveCategoriesAction } from './actions';

export const getCatalogOperation = () => dispatch => {
  dispatch(categoriesLoadingAction(true));
  getCategories().then(res => {
    dispatch(saveCategoriesAction(res));
    dispatch(categoriesLoadingAction(false));
  });
};
