import { SET_QUERY, SET_SEARCH_RESULTS } from './types';

const initialState = {
  queryString: '',
  searchResults: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return { ...state, queryString: action.payload };
    }
    case SET_SEARCH_RESULTS: {
      return { ...state, searchResults: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
