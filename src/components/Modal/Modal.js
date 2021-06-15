import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ children, buttonHandler, modalWidth }) => {
  const [opacityStyle, setOpacityStyle] = useState({});
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  const modalStyle = { width: modalWidth, marginLeft: -(modalWidth / 2) };

  setTimeout(() => {
    setOpacityStyle({ visibility: 'visible', opacity: 1 });
  }, 10);

  useEffect(() => {
    document.body.classList.add('lock');
    return function cleanup() {
      document.body.classList.remove('lock');
    };
  }, []);

  const closeBtnHandler = e => {
    const modal = modalRef.current;
    const close = closeRef.current;
    if (modal.contains(e.target) && e.target !== close) {
      return;
    }
    buttonHandler();
  };

  return (
    <div onClick={closeBtnHandler} className={styles.modalFade} style={opacityStyle}>
      <div style={modalStyle} className={styles.modal} ref={modalRef}>
        <div>
          <span className={styles.close} ref={closeRef}>
            {' '}
          </span>
        </div>
        <div className='modal__body'>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  buttonHandler: PropTypes.func.isRequired,
  modalWidth: PropTypes.number,
};

Modal.defaultProps = {
  modalWidth: 730,
};

export default Modal;
