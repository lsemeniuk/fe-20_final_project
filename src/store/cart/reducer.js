import { SET_CART, SET_CART_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART: {
      return { ...state, data: action.payload };
    }
    case SET_CART_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
