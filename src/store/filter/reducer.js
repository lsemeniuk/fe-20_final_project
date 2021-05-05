import { GET_FILTERS } from './types';

const initialState = {
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERS: {
      console.log('action.payload', action.payload);
      return { ...state, filters: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
