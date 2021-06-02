import { ADD_COMMENT, GET_ALL_COMMENTS, SET_COMMENTS_LOADING, DELETE_COMMENT, UPDATE_COMMENT } from './types';

export const addCommentAction = newComment => ({ type: ADD_COMMENT, payload: newComment });
export const deleteCommentAction = deletedComment => ({ type: DELETE_COMMENT, payload: deletedComment });
export const updateCommentAction = updatedComment => ({ type: UPDATE_COMMENT, payload: updatedComment });
export const commentsLoadingAction = isLoading => ({ type: SET_COMMENTS_LOADING, payload: isLoading });
export const getAllCommentsAction = comments => ({ type: GET_ALL_COMMENTS, payload: comments });
