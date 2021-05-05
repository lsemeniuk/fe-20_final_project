import { ADD_TO_FAVORITES, CLEAR_FAVORITES, LOAD_FAVORITES, REMOVE_FROM_FAVORITES, SET_ISLOADING } from './types';

const initialState = {
  isLoading: '',
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return { ...state, data: action.payload };

    case SET_ISLOADING:
      return { ...state, isLoading: action.payload };

    case ADD_TO_FAVORITES: {
      //! action.payload is Product!
      const inFavs = state.data.find(item => item._id === action.payload._id);

      if (inFavs) return state;
      return { ...state, data: [...state.data, { ...action.payload }] };
    }
    case REMOVE_FROM_FAVORITES: {
      return {
        ...state, //! action.payload is id!
        data: state.data.filter(item => item._id !== action.payload),
      };
    }
    case CLEAR_FAVORITES: {
      //! NO action.payload !
      return { ...state, data: [] };
    }
    default:
      return state;
  }
};

export default reducer;
