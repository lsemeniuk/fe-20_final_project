import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ReviewItem.module.scss';
import Icons from '../../../../../components/Icons/Icons';
import { getDate } from '../../../../../utils/func';
import { getCustomerSelector } from '../../../../../store/customer/selectors';
import { deleteComment } from '../../../../../http/commentAPI';
import ReviewForm from '../ReviewForm/ReviewForm';

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

      <div className={styles.row}>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
        <p className={styles.commentText}>{content}</p>
        <Icons type='commas' color='#37b7fa' filled width={15} height={15} />
      </div>

      {customerId === reviewCustomerId && (
        <button type='button' onClick={() => deleteReview()} className={styles.up}>
          Удалить
        </button>
      )}

      {customerId === reviewCustomerId && (
        <button type='button' onClick={handleUpdate} className={styles.slide}>
          Изменить
        </button>
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
