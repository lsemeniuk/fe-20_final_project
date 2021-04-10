import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  // initialState
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;