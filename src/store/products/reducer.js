import {
  SET_PRODUCTS,
  SET_PRODUCTS_LOADING,
  SET_ONE_PRODUCT,
  SET_ONE_PRODUCT_LOADING,
  SET_PRODUCTS_FILTER,
  SET_PRODUCTS_QUANTITY,
} from './types';

const initialState = {
  data: [],
  product: {},
  productsFilter: { perPage: 9, startPage: 1 },
  productsQuantity: {},
  isLoading: true,
  productLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, data: action.payload };
    }
    case SET_ONE_PRODUCT: {
      return { ...state, product: action.payload };
    }
    case SET_PRODUCTS_FILTER: {
      return { ...state, productsFilter: action.payload };
    }
    case SET_PRODUCTS_QUANTITY: {
      return { ...state, productsQuantity: action.payload };
    }
    case SET_PRODUCTS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_ONE_PRODUCT_LOADING: {
      return { ...state, productLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
