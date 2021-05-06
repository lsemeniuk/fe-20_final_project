import { SET_CUSTOMER_ISAUTH, SET_CUSTOMER, SET_ISLOADING } from './types';

const initialState = {
  isAuth: false,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER_ISAUTH: {
      return { ...state, isAuth: action.payload };
    }

    case SET_CUSTOMER: {
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
