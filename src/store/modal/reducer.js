import { SET_LOCK_SCROLL } from './types';

const initialState = {
  isLock: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCK_SCROLL: {
      return { ...state, isLock: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
