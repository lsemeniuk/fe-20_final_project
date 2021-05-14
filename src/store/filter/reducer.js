import { GET_FILTERS, CHECKED_FILTERS } from './types';

const initialState = {
  filters: [],
  checked: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERS: {
      return { ...state, filters: action.payload };
    }
    case CHECKED_FILTERS: {
      return { ...state, checked: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
