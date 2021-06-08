import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ReviewItem.module.scss';
import { getDate } from '../../../../../utils/func';
import { getCustomerSelector } from '../../../../../store/customer/selectors';
import { deleteComment } from '../../../../../http/commentAPI';
import ReviewForm from '../ReviewForm/ReviewForm';
import Icons from '../../../../../components/Icons/Icons';

const ReviewItem = ({ review, setRefreshReviews, productId }) => {
  const { customer: reviewCustomer, date, content, _id: reviewId } = review;
  const { _id: reviewCustomerId } = reviewCustomer;

  const { _id: customerId } = useSelector(getCustomerSelector);

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const deleteReview = () => deleteComment(reviewId, setRefreshReviews);

  const handleUpdate = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return (
    <li className={styles.comment}>
      <div className={styles.name__date}>
        <div className={styles.customer}>
          {reviewCustomer.firstName} {reviewCustomer.lastName}
        </div>
        <div className={styles.date}>{getDate(date)}</div>
      </div>
      <hr />

      {!showUpdateForm && (
        <div className={styles.row}>
          <p className={styles.commentText}>{content}</p>
          <div className={styles.iconsContainer}>
            {customerId === reviewCustomerId && (
              <Icons onClick={handleUpdate} type='edit' color='#00000' filled width={30} height={30} />
            )}
            {customerId === reviewCustomerId && (
              <Icons onClick={() => deleteReview()} type='deleteIcon' color='#00000' filled width={30} height={30} />
            )}
          </div>
        </div>
      )}

      {showUpdateForm && (
        <ReviewForm
          review={review}
          reviewId={reviewId}
          productId={productId}
          setRefreshReviews={setRefreshReviews}
          updateReview
        />
      )}
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  setRefreshReviews: PropTypes.func.isRequired,
};

export default ReviewItem;
