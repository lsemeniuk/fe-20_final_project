import { combineReducers } from 'redux';
import customerReducer from './customer/reducer';
import productsReducer from './products/reducer';

const reducer = combineReducers({
  customer: customerReducer,
  products: productsReducer,
});

export default reducer;
