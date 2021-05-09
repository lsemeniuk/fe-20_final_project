import { getProducts } from '../../http/productAPI';
import { productsLoadingAction, saveProductsAction } from './actions';

export const getProductsOperation = () => dispatch => {
  dispatch(productsLoadingAction(true));
  getProducts().then(res => {
    dispatch(saveProductsAction(res.data));
    dispatch(productsLoadingAction(false));
  });
};
