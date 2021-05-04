import { SET_MODAL_CART, SET_MODAL_AUTH_REG } from './types';

const initialState = {
  cartOpen: false,
  authRegOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_CART: {
      return { ...state, cartOpen: action.payload };
    }
    case SET_MODAL_AUTH_REG: {
      return { ...state, authRegOpen: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
