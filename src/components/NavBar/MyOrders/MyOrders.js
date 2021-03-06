import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartLoadingSelector,
  cartTotalPriceSelector,
  getCartSelector,
  getLocalCartSelector,
} from '../../../store/cart/selectors';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';
import { saveModalCartAction } from '../../../store/modal/actions';
import { getModalCartSelector } from '../../../store/modal/selectors';
import Icons from '../../Icons/Icons';
import Cart from '../../Cart/Cart';
import styles from './MyOrders.module.scss';
import { replace } from '../../../utils/func';

const MyOrders = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const modalCart = useSelector(getModalCartSelector);
  const cart = useSelector(getCartSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const totalPrice = replace(useSelector(cartTotalPriceSelector));
  const localCart = useSelector(getLocalCartSelector);

  const modalHandler = () => {
    dispatch(saveModalCartAction(!modalCart));
  };

  let ordersCart = null;
  let quantity = 0;

  if (isAuth && cart?.products) {
    for (let i = 0; i < cart.products.length; i++) {
      quantity += cart.products[i].cartQuantity;
    }

    ordersCart = (
      <div className={styles.orderIconListItem} style={{ cursor: 'pointer' }} onClick={modalHandler}>
        <div className={styles.centerBlock}>
          <Icons type='navBag' color='white' />
          <span className={styles.productToCart}>{cartLoading ? null : quantity}</span>
        </div>
        <div className={styles.infoCart}>
          <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
          <span className={styles.menuOrderPrice}>{`${totalPrice} грн`}</span>
        </div>
      </div>
    );
  } else if (!isAuth && localCart && localCart.products?.length >= 1) {
    for (let i = 0; i < localCart.products.length; i++) {
      quantity += localCart.products[i].cartQuantity;
    }

    ordersCart = (
      <div className={styles.orderIconListItem} style={{ cursor: 'pointer' }} onClick={modalHandler}>
        <div className={styles.centerBlock}>
          <Icons type='navBag' color='white' />
          <span className={styles.productToCart}>{quantity}</span>
        </div>
        <div className={styles.infoCart}>
          <h4 className={styles.menuOrderTitle}>Мой заказ</h4>
          <span className={styles.menuOrderPrice}>{`${totalPrice} грн`}</span>
        </div>
      </div>
    );
  } else {
    ordersCart = (
      <div className={styles.orderIconListItem}>
        <div className={styles.centerBlock}>
          <Icons type='navBag' color='white' />
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
    );
  }

  return (
    <>
      {ordersCart}
      <Cart buttonHandler={modalHandler} />
    </>
  );
};

export default MyOrders;
