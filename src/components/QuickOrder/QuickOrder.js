import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import QuickOrderForm from '../QuickOrderForm/QuickOrderForm';
import styles from './QuickOrder.module.scss';

const QuickOrder = ({ product, quickOrderOpen, setQuickOrderOpen }) => {
  return (
    <Modal
      buttonHandler={() => {
        setQuickOrderOpen(!quickOrderOpen);
      }}
      modalWidth={570}
      display={quickOrderOpen}
    >
      <h2 className={styles.title}>Быстрый заказ</h2>
      <QuickOrderForm product={product} setQuickOrderOpen={setQuickOrderOpen} />
    </Modal>
  );
};

QuickOrder.propTypes = {
  product: PropTypes.object.isRequired,
  quickOrderOpen: PropTypes.bool.isRequired,
  setQuickOrderOpen: PropTypes.func.isRequired,
};

export default QuickOrder;
