import { SET_WISHLIST, SET_WISHLIST_LOADING, CLEAR_WISH_LIST } from './types';

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
    case CLEAR_WISH_LIST: {
      return { ...state, data: null };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
