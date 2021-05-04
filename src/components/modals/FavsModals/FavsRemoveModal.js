import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromFavoritesAction } from '../../../store/favorites/actions';
import './FavsModalStyles.scss';

const FavsRemoveModal = ({ modalOpen, removeId, setModalOpen }) => {
  const dispatch = useDispatch();
  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesAction(removeId));
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
        <p>Вы уверены что хотите удалить этот товар из желаний?</p>
        <div className='position'>
          <button type='button' className='button ok' onClick={() => removeFromFavorites(removeId)}>
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
FavsRemoveModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  removeId: PropTypes.oneOf([PropTypes.null, PropTypes.number]).isRequired,
};
export default FavsRemoveModal;
