import { combineReducers } from 'redux';
import filtersReducer from './filter/reducer';
import customerReducer from './customer/reducer';
import productsReducer from './products/reducer';
import catalogReducer from './catalog/reducer';
import cartReducer from './cart/reducer';
import modalReducer from './modal/reducer';
import brandsReducer from './brands/reducer';
import pageReducer from './pages/reducer';
import linksReducer from './links/reducer';
import wishListReducer from './wishList/reducer';
import commentsReducer from './reviews/reducer';
import colorsReducer from './colors/reducer';

const reducer = combineReducers({
  brands: brandsReducer,
  filters: filtersReducer,
  customer: customerReducer,
  products: productsReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  page: pageReducer,
  modal: modalReducer,
  links: linksReducer,
  wishList: wishListReducer,
  comments: commentsReducer,
  colors: colorsReducer,
});

export default reducer;
