import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import productsReducer from './products/reducer';

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

export default reducer;
