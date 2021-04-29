import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, data: action.payload };
    }
    case SET_CATEGORIES_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
