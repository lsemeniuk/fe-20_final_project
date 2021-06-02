import { SET_COLORS, SET_COLORS_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS: {
      return { ...state, data: action.payload };
    }
    case SET_COLORS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
