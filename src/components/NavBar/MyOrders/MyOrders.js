import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveLockScrollAction } from '../../../store/modal/actions';
import { getLockScrollSelector } from '../../../store/modal/selectors';
import { replace } from '../../../utils/func';
import Icons from '../../Icons/Icons';
import Cart from '../../modals/Cart/Cart';
import styles from './MyOrders.module.scss';

const MyOrders = () => {
  const dispatch = useDispatch();
  const lockScroll = useSelector(getLockScrollSelector);
  const cart = 2;
  const [modalCart, setmodalCart] = useState(false);

  const modalHandler = () => {
    setmodalCart(!modalCart);
    dispatch(saveLockScrollAction(!lockScroll));
    document.body.classList.toggle('lock');
  };

  return (
    <>
      {cart ? (
        <div className={styles.iconListItem} style={{ cursor: 'pointer' }} onClick={modalHandler}>
          <div className={styles.iconCart}>
            <Icons type='navBag' color='black' width={25} height={45} />
            <span className={styles.productToCart}>{cart}</span>
          </div>
          <div className={styles.infoCart}>
            <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
            <span className={styles.menuOrderPrice}>{`${replace(11321)} грн`}</span>
          </div>
        </div>
      ) : (
        <div className={styles.iconListItem}>
          <div className={styles.iconCart}>
            <Icons type='navBag' color='black' width={25} height={45} />
            <span className={styles.productToCart}>0</span>
          </div>
          <div className={styles.infoCart}>
            <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
          </div>
        </div>
      )}
      <Cart buttonHandler={modalHandler} display={modalCart} />
    </>
  );
};

export default MyOrders;
