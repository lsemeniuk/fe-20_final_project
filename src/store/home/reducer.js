import { GET_CATEGORY } from './types';

const initialState = {
  categoryName: 'Мужские',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return { ...state, categoryName: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
