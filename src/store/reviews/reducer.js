/* eslint-disable no-underscore-dangle */
import { ADD_COMMENT, GET_ALL_COMMENTS, SET_COMMENTS_LOADING } from './types';

const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return { ...state, data: [...state.data, action.payload] };
    }
    case GET_ALL_COMMENTS: {
      return { ...state, data: action.payload };
    }
    case SET_COMMENTS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
