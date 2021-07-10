import { getProducts, getProductById, getProductsFilterParams, getProductByUrl } from '../../http/productAPI';
import {
  productsLoadingAction,
  saveProductsAction,
  saveOneProductAction,
  oneProductLoadingAction,
  saveProductsQuantityAction,
  saveProductsFilterAction,
  saveProductsFilteredAction,
} from './actions';

export const getProductsOperation = () => dispatch => {
  dispatch(productsLoadingAction(true));
  getProducts().then(res => {
    dispatch(saveProductsAction(res.data));
    dispatch(productsLoadingAction(false));
  });
};

export const getOneProductOperation = itemNo => dispatch => {
  dispatch(oneProductLoadingAction(true));
  getProductById(itemNo).then(res => {
    dispatch(saveOneProductAction(res.data));
    dispatch(oneProductLoadingAction(false));
  });
};

export const getOneProductUrlOperation = productUrl => dispatch => {
  dispatch(oneProductLoadingAction(true));
  getProductByUrl(productUrl).then(res => {
    dispatch(saveOneProductAction(res.data));
    dispatch(oneProductLoadingAction(false));
  });
};

/* eslint-disable prettier/prettier */

export const getProductsFilterOperation = ({ history, ...filters }) => dispatch => {
  dispatch(productsLoadingAction(true));

    dispatch(saveProductsFilterAction({ ...filters }));

    const { categories, ...Currentfilters } = filters;
    const currentUrlParams = new URLSearchParams(Currentfilters);
    history.push(`${history.location.pathname}?${currentUrlParams}`);

    getProductsFilterParams(filters).then(res => {
      dispatch(saveProductsFilteredAction(res.data.products));
      dispatch(saveProductsQuantityAction(res.data.productsQuantity));

      dispatch(productsLoadingAction(false));
    });
  };
