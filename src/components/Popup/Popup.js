import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Popup.module.scss';
import { getModalPopupSelector } from '../../store/modal/selectors';
import { saveModalPopupAction } from '../../store/modal/actions';

const Popup = () => {
  const dispatch = useDispatch();
  const { isOpen, message, failed, action } = useSelector(getModalPopupSelector);
  const activeClass = isOpen ? styles.popupWrapperActive : styles.popupWrapper;
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('lock');
  }, []);

  if (isOpen) {
    setTimeout(() => {
      document.body.classList.remove('lock');
      dispatch(saveModalPopupAction({ isOpen: false }));
      action();
    }, 300000);
  }

  const closeBtnHandler = e => {
    const modal = modalRef.current;
    const close = closeRef.current;

    if (modal.contains(e.target) && e.target !== close) {
      return;
    }

    document.body.classList.remove('lock');
    dispatch(saveModalPopupAction({ isOpen: false }));
    action();
  };

  let classPorup = '';
  if (failed) {
    classPorup = `${styles.popup} ${styles.failed}`;
  } else {
    classPorup = `${styles.popup} ${styles.success}`;
  }

  return (
    <div onClick={closeBtnHandler} className={activeClass}>
      <div className={classPorup} ref={modalRef}>
        <span className={styles.close} ref={closeRef}>
          {' '}
        </span>
        <div className={styles.content}>{message}</div>
      </div>
    </div>
  );
};

export default Popup;
