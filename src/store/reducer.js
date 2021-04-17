import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import productsReducer from './products/reducer';
import homeReducer from './home/reducer';

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  home: homeReducer,
});

export default reducer;
