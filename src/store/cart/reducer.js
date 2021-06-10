import { SET_CART, SET_LOCAL_CART, SET_CART_LOADING, SET_CART_TOTAL_PRICE, SET_DELIVERY_METHOD } from './types';

const initialState = {
  isLoading: true,
  data: {},
  localCart: JSON.parse(localStorage.getItem('cart')),
  totalPrice: '',
  deliveryMethod: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART: {
      return { ...state, data: action.payload };
    }
    case SET_LOCAL_CART: {
      return { ...state, localCart: action.payload };
    }
    case SET_CART_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_CART_TOTAL_PRICE: {
      return { ...state, totalPrice: action.payload };
    }
    case SET_DELIVERY_METHOD: {
      return { ...state, deliveryMethod: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
