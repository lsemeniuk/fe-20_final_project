/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../../../components/Loader/Loader';
import ReviewItem from './ReviewItem/ReviewItem';
import ReviewForm from './ReviewForm/ReviewForm';
import { getCustomerIsAuthSelector } from '../../../../store/customer/selectors';
import { getProductComments } from '../../../../http/commentAPI';
import styles from './Reviews.module.scss';

const Reviews = ({ productId }) => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [refreshReviews, setRefreshReviews] = useState(true);

  useEffect(() => {
    getProductComments(productId).then(res => {
      setReviews(res.data);
      setReviewsLoading(false);
      setRefreshReviews(false);
    });
  }, [refreshReviews]);

  const commentsList = reviews.map(review => (
    <ReviewItem key={review.content} review={review} productId={productId} setRefreshReviews={setRefreshReviews} />
  ));
  if (reviewsLoading) return <Loader />;
  return (
    <>
      {isAuth ? (
        <ReviewForm productId={productId} setRefreshReviews={setRefreshReviews} />
      ) : (
        <p className={styles.comments__container}>Пожалуйста, войдите или зарегистрируйтесь, чтобы оставить отзыв</p>
      )}
      {reviews.length > 0 ? (
        <ul className={styles.comments__container}>{commentsList}</ul>
      ) : (
        <p className={styles.first__comment}>Ваш отзыв будет первым!</p>
      )}
    </>
  );
};

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Reviews;
