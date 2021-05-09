import { getBrands } from '../../http/brandsAPI';
import { brandsLoadingAction, saveBrandsAction } from './actions';

export const getBrandsOperation = () => dispatch => {
  dispatch(brandsLoadingAction(true));
  getBrands().then(res => {
    dispatch(saveBrandsAction(res.data));
    dispatch(brandsLoadingAction(false));
  });
};
