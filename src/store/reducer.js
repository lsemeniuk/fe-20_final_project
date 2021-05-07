import { combineReducers } from 'redux';
import filtersReducer from './filter/reducer';
import customerReducer from './customer/reducer';
import productsReducer from './products/reducer';
import catalogReducer from './catalog/reducer';
import cartReducer from './cart/reducer';
import modalReducer from './modal/reducer';
import brandsReducer from './brands/reducer';

const reducer = combineReducers({
  brands: brandsReducer,
  filters: filtersReducer,
  customer: customerReducer,
  products: productsReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default reducer;
