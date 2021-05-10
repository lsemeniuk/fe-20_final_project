import { SET_WISHLIST, SET_WISHLIST_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST: {
      return { ...state, data: action.payload };
    }
    case SET_WISHLIST_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
