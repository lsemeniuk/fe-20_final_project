import { SET_QUERY } from './types';

const initialState = {
  queryString: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return { ...state, queryString: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
