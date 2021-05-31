import { ADD_COMMENT, SET_COMMENTS_LOADING } from './types';

export const addCommentAction = newComment => ({ type: ADD_COMMENT, payload: newComment });
export const commentsLoadingAction = isLoading => ({ type: SET_COMMENTS_LOADING, payload: isLoading });
