/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { removeFromFavoritesAction } from '../../../store/favorites/actions';
import './FavsClearModal.scss';

function FavsRemoveModal({ removeModalOpen, removeId, setRemoveModalOpen }) {
  const dispatch = useDispatch();
  const removeFromFavorites = () => {
    dispatch(removeFromFavoritesAction(removeId));
    setRemoveModalOpen(false);
  };
  return (
    <Modal
      isOpen={removeModalOpen}
      onRequestClose={() => setRemoveModalOpen(false)}
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
          <button type='button' className='button' onClick={() => setRemoveModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default FavsRemoveModal;
