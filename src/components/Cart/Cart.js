import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { CHECKOUT_ROUTE } from '../../utils/consts';
import RecommendList from '../RecommendList/RecommendList';
import { getModalCartSelector } from '../../store/modal/selectors';
import { cartTotalPriceSelector } from '../../store/cart/selectors';
import CartList from '../CartList/CartList';
import { replace } from '../../utils/func';
import styles from './Cart.module.scss';

const Cart = ({ buttonHandler, display }) => {
  const modalCart = useSelector(getModalCartSelector);
  const totalPrice = replace(useSelector(cartTotalPriceSelector));

  if (!modalCart) {
    return null;
  }

  return (
    <Modal buttonHandler={buttonHandler} display={display}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.header}>
        <div className={styles.headerQuantity}>Количество</div>
        <div className={styles.headerPrice}>Стоимость</div>
      </div>

      <ul className={styles.list}>
        <CartList />
      </ul>

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
          <NavLink to={CHECKOUT_ROUTE} onClick={() => buttonHandler()}>
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
