import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ReviewItem.module.scss';
import { getDate } from '../../../../../utils/func';
import { getCustomerSelector } from '../../../../../store/customer/selectors';
import { deleteComment } from '../../../../../http/commentAPI';
import ReviewForm from '../ReviewForm/ReviewForm';
import Icons from '../../../../../components/Icons/Icons';
import ModalConfirm from '../../../../../components/ModalConfirm/ModalConfirm';

const ReviewItem = ({ review, setRefreshReviews, productId }) => {
  const { customer: reviewCustomer, date, content, _id: reviewId } = review;
  const { _id: reviewCustomerId } = reviewCustomer;
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const { _id: customerId } = useSelector(getCustomerSelector);

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
        <div className={styles.lineDate}>
          <div className={styles.date}>{getDate(date)}</div>
          {customerId === reviewCustomerId && (
            <div className={styles.iconsContainer}>
              <Icons
                className={styles.icon}
                onClick={handleUpdate}
                type='edit'
                color='#000000'
                filled
                width={15}
                height={15}
              />
              <Icons
                className={styles.icon}
                onClick={() => setOpenConfirmModal(true)}
                type='deleteIcon'
                color='#000000'
                filled
                width={15}
                height={15}
              />
            </div>
          )}
        </div>
        {openConfirmModal && (
          <ModalConfirm
            modalOpen={openConfirmModal}
            setModalOpen={setOpenConfirmModal}
            content='Вы дествительно хотите удалить комментарий?'
            buttonTitle='Удалить'
            action={deleteReview}
          />
        )}
      </div>
      <hr />

      {showUpdateForm ? (
        <ReviewForm
          review={review}
          reviewId={reviewId}
          productId={productId}
          setRefreshReviews={setRefreshReviews}
          updateReview
        />
      ) : (
        <div className={styles.commentContent}>
          <p className={styles.commentText}>{content}</p>
        </div>
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
