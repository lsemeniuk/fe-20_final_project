import { getProducts, getProductById } from '../../http/productAPI';
import { productsLoadingAction, saveProductsAction, saveOneProductAction, oneProductLoadingAction } from './actions';

export const getProductsOperation = () => dispatch => {
  dispatch(productsLoadingAction(true));
  getProducts().then(res => {
    dispatch(saveProductsAction(res.data));
    dispatch(productsLoadingAction(false));
  });
};

export const getOneProductOperation = productId => dispatch => {
  dispatch(oneProductLoadingAction(true));
  getProductById(productId).then(res => {
    dispatch(saveOneProductAction(res.data));
    dispatch(oneProductLoadingAction(false));
  });
};
