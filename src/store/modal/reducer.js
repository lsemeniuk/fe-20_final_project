import { SET_MODAL_CART, SET_MODAL_AUTH_REG, SET_MODAL_POPUP } from './types';

const initialState = {
  cartOpen: false,
  authRegOpen: false,
  popup: {
    isOpen: false,
    message: 'default',
    failed: true,
    action: () => {
      return null;
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_CART: {
      return { ...state, cartOpen: action.payload };
    }
    case SET_MODAL_AUTH_REG: {
      return { ...state, authRegOpen: action.payload };
    }
    case SET_MODAL_POPUP: {
      return { ...state, popup: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
