import { combineReducers } from 'redux';
import customerReducer from './customer/reducer';
import productsReducer from './products/reducer';
import catalogReducer from './catalog/reducer';
import favoritesReducer from './favorites/reducer';
import cartReducer from './cart/reducer';
import modalReducer from './modal/reducer';

const reducer = combineReducers({
  customer: customerReducer,
  products: productsReducer,
  catalog: catalogReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  modal: modalReducer,
});
