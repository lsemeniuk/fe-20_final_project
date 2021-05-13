import { SET_PRODUCTS, SET_PRODUCTS_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, data: action.payload };
    }
    case SET_PRODUCTS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
