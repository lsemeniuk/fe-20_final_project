import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ children, buttonHandler }) => {
  console.log(styles);
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  const closeBtnHandler = e => {
    const modal = modalRef.current;
    const close = closeRef.current;
    if (modal.contains(e.target) && e.target !== close) {
      return;
    }
    buttonHandler();
  };

  return (
    <div onClick={closeBtnHandler} className={styles.modalFade}>
      <div className={styles.modal} ref={modalRef}>
        <div>
          <span className={styles.close}> </span>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  buttonHandler: PropTypes.func.isRequired,
};

export default Modal;
