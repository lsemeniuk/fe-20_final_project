/* eslint-disable no-console */
import { addComment, getComments } from '../../http/commentAPI';
import { commentsLoadingAction } from './actions';
import { ADD_COMMENT, GET_ALL_COMMENTS } from './types';

export const addNewCommentOperation = newComment => dispatch => {
  dispatch(commentsLoadingAction(true));
  addComment(newComment).then(res => {
    console.log(res.data);
    dispatch({ type: ADD_COMMENT, payload: res.data });
  });
  dispatch(commentsLoadingAction(false));
};

export const getAllCommentsOperation = () => dispatch => {
  dispatch(commentsLoadingAction(true));
  getComments().then(res => {
    dispatch({ type: GET_ALL_COMMENTS, payload: res.data });
  });
  dispatch(commentsLoadingAction(false));
};
