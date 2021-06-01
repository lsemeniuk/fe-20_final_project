import { ADD_COMMENT, GET_ALL_COMMENTS, SET_COMMENTS_LOADING } from './types';

export const addCommentAction = newComment => ({ type: ADD_COMMENT, payload: newComment });
export const commentsLoadingAction = isLoading => ({ type: SET_COMMENTS_LOADING, payload: isLoading });
export const getAllCommentsAction = comments => ({ type: GET_ALL_COMMENTS, payload: comments });
