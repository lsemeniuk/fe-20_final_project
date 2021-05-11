import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartLoadingSelector, cartTotalPriceSelector, getCartSelector } from '../../../store/cart/selectors';
import { saveModalCartAction } from '../../../store/modal/actions';
import { getModalCartSelector } from '../../../store/modal/selectors';
import Icons from '../../Icons/Icons';
import Cart from '../../modals/Cart/Cart';
import styles from './MyOrders.module.scss';

const MyOrders = () => {
  const dispatch = useDispatch();
  const modalCart = useSelector(getModalCartSelector);
  const cart = useSelector(getCartSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);

  let quantity = 0;
  if (cart?.products) {
    for (let i = 0; i < cart.products.length; i++) {
      quantity += cart.products[i].cartQuantity;
    }
  }

  const modalHandler = () => {
    dispatch(saveModalCartAction(!modalCart));
  };

  return (
    <>
      {cart ? (
        <div className={styles.iconListItem} style={{ cursor: 'pointer' }} onClick={modalHandler}>
          <div className={styles.iconCart}>
            <Icons type='navBag' color='black' width={25} height={45} />
            <span className={styles.productToCart}>{cartLoading ? null : quantity}</span>
          </div>
          <div className={styles.infoCart}>
            <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
            <span className={styles.menuOrderPrice}>{`${totalPrice} грн`}</span>
          </div>
        </div>
      ) : (
        <div className={styles.iconListItem}>
          <div className={styles.iconCart}>
            <Icons type='navBag' color='black' width={25} height={45} />
            <span className={styles.productToCart}>0</span>
          </div>
          <div className={styles.infoCart}>
            <h4 className={styles.menuOrderTitle}>
              Корзина
              <br />
              пустая
            </h4>
          </div>
        </div>
      )}
      <Cart buttonHandler={modalHandler} display={modalCart} />
    </>
  );
};

export default MyOrders;
