import { SET_PRODUCTS } from './types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
