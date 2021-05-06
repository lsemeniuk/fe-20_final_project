import { GET_FILTERS } from './types';

const initialState = {
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERS: {
      return { ...state, filters: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
