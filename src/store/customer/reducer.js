import { SET_CUSTOMMER_ISAUTH, SET_CUSTOMMER, SET_ISLOADING } from './types';

const initialState = {
  isAuth: false,
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMMER_ISAUTH: {
      return { ...state, isAuth: action.payload };
    }
    case SET_CUSTOMMER: {
      return { ...state, data: action.payload };
    }
    case SET_ISLOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
