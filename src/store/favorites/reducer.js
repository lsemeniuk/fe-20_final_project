import {
  FAVORITES_LOAD,
  FAVORITES_SET_ISLOADING,
  FAVORITES_ADD_ITEM,
  FAVORITES_REMOVE_ITEM,
  FAVORITES_CLEAR,
} from './types';

const initialState = {
  data: [],
  isLoading: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_LOAD:
      return { ...state, data: action.payload };

    case FAVORITES_SET_ISLOADING:
      return { ...state, isLoading: action.payload };

    case FAVORITES_ADD_ITEM: {
      const inFavs = state.data.find(item => item._id === action.payload._id);

      if (inFavs) return state;
      return { ...state, data: [...state.data, { ...action.payload }] };
    }
    case FAVORITES_REMOVE_ITEM: {
      return {
        ...state,
        data: state.data.filter(item => item._id !== action.payload),
      };
    }
    case FAVORITES_CLEAR: {
      return { ...state, data: [] };
    }
    default:
      return state;
  }
};

export default reducer;
