import { SET_PAGE, SET_PAGE_LOADING } from './types';

const initialState = {
  isLoading: true,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return { ...state, data: action.payload };
    }
    case SET_PAGE_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
