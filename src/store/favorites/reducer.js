import { ADD_TO_FAVORITES, CLEAR_FAVORITES, REMOVE_FROM_FAVORITES } from './types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      //! action.payload is Product!
      const inFavs = state.data.find(item => item._id === action.payload._id);

      if (inFavs) return state;
      return { ...state, data: [...state.data, { ...action.payload, qty: 1 }] };
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