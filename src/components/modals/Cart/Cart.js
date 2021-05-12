import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '../../Button/Button';
import { CHECKOUT_ROUTE } from '../../../utils/consts';
import RecommendList from './RecommendList/RecommendList';
import styles from './Cart.module.scss';
import Loader from '../../Loader/Loader';
import { getModalCartSelector } from '../../../store/modal/selectors';
import { cartLoadingSelector, cartTotalPriceSelector, getCartSelector } from '../../../store/cart/selectors';
import { getCartOperation } from '../../../store/cart/operations';

const Cart = ({ buttonHandler, display }) => {
  const dispatch = useDispatch();
  const modalCart = useSelector(getModalCartSelector);
  const cart = useSelector(getCartSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);

  useEffect(() => {
    dispatch(getCartOperation());
  }, []);

  if (!modalCart) {
    return null;
  }

  if (cartLoading) {
    return (
      <Modal buttonHandler={buttonHandler} display={display}>
        <Loader />
      </Modal>
    );
  }

  return (
    <Modal buttonHandler={buttonHandler} display={display}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.header}>
        <div className={styles.headerQuantity}>Количество</div>
        <div className={styles.headerPrice}>Стоимость</div>
      </div>

      <div className={styles.list}>
        {cart ? (
          cart.products.map(p => (
            <CartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} cart={cart} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '50px 0' }} className={styles.title}>
            В корзине пока нет товаров
          </div>
        )}
      </div>

      <div className={`${styles.list} ${styles.checkoutContainer}`}>
        <div className={styles.backContainer}>
          <span className={styles.back} onClick={() => buttonHandler()}>
            &#8592; Вернуться к покупкам
          </span>
        </div>
        <div className={styles.checkoutBlock}>
          <h3 className={styles.price}>
            <span className={styles.total}>Итого</span>
            {totalPrice} грн
          </h3>
          <NavLink to={CHECKOUT_ROUTE}>
            <Button title='Оформить заказ' />
          </NavLink>
        </div>
      </div>

      <RecommendList />
    </Modal>
  );
};

Cart.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
};

export default Cart;
