import { LOAD_PROFILE, SET_ISLOADING } from './types';

const initialState = {
  data: null,
  isLoading: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return { ...state, data: action.payload };

    case SET_ISLOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default reducer;
