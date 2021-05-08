import { SET_PAGES, SET_PAGES_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES: {
      return { ...state, data: action.payload };
    }
    case SET_PAGES_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
