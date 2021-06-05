import { SET_REVIEWS, SET_REVIEWS_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS: {
      return { ...state, data: action.payload };
    }
    case SET_REVIEWS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
