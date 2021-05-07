import { SET_BRANDS, SET_BRANDS_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS: {
      return { ...state, data: action.payload };
    }
    case SET_BRANDS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
