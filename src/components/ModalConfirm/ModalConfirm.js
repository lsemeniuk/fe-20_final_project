import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './ModalConfirm.module.scss';

const ModalConfirm = ({ modalOpen, setModalOpen, content, buttonTitle, action }) => {
  const actionModal = () => {
    action();
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      buttonHandler={() => {
        closeModal();
      }}
      modalWidth={470}
      display={modalOpen}
    >
      <h2 className={styles.title}>Подтверджение</h2>
      <p className={styles.content}>{content}</p>
      <div className={styles.buttons}>
        <Button title={buttonTitle} onClick={() => actionModal()} />
        <Button className={styles.cancel} title='Отмена' onClick={() => closeModal()} />
      </div>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ModalConfirm;
