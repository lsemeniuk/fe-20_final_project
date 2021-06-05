import { getProductComments } from '../../http/commentAPI';
import { reviewsLoadingAction, saveReviewsAction } from './actions';

export const getProductReviewsOperation = () => dispatch => {
  dispatch(reviewsLoadingAction(true));
  getProductComments().then(res => {
    dispatch(saveReviewsAction(res.data));
    dispatch(reviewsLoadingAction(false));
  });
};
