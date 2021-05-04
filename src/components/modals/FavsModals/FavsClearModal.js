import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearFavoritesAction } from '../../../store/favorites/actions';
import './FavsModalStyles.scss';

const FavsClearModal = ({ modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  const clearFavorites = () => {
    dispatch(clearFavoritesAction());
    setModalOpen(false);
  };
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      ariaHideApp={false}
      className='modal'
      closeTimeoutMS={300}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
      }}
    >
      <div>
        <h3>Подтвердите действие:</h3>
        <p>Вы уверены что хотите очистить список желаний?</p>
        <div className='position'>
          <button type='button' className='button ok' onClick={() => clearFavorites()}>
            OK
          </button>
          <button type='button' className='button' onClick={() => setModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
FavsClearModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
export default FavsClearModal;
