import { getCategories } from '../../http/catalogAPI';
import { categoriesLoadingAction, saveCategoriesAction } from './actions';

export const getCatalogOperation = () => dispatch => {
  getCategories().then(res => {
    dispatch(saveCategoriesAction(res.data));
    dispatch(categoriesLoadingAction(false));
  });
};
