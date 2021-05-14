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
<<<<<<< HEAD
=======

>>>>>>> 4bc1c1c80e3ed27932d099270bcd169f2e711adf
    default: {
      return state;
    }
  }
};

export default reducer;
