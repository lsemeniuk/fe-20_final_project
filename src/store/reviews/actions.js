import { SET_REVIEWS, SET_REVIEWS_LOADING } from './types';

export const saveReviewsAction = reviews => ({ type: SET_REVIEWS, payload: reviews });

export const reviewsLoadingAction = isLoading => ({ type: SET_REVIEWS_LOADING, payload: isLoading });
