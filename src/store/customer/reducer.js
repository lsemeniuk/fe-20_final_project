import { SET_CURRENT_CUSTOMMER } from './types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CUSTOMMER: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
