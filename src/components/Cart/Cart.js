/* eslint-disable dot-notation */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { CHECKOUT_ROUTE } from '../../utils/consts';
import RecommendList from '../RecommendList/RecommendList';
import { getModalCartSelector } from '../../store/modal/selectors';
import { getProductsSelector } from '../../store/products/selectors';
import { cartTotalPriceSelector, getCartSelector, getLocalCartSelector } from '../../store/cart/selectors';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import styles from './Cart.module.scss';

const Cart = ({ buttonHandler, display }) => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const modalCart = useSelector(getModalCartSelector);
  const cart = useSelector(getCartSelector);
  const products = useSelector(getProductsSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const localCart = useSelector(getLocalCartSelector);

  if (!modalCart) {
    return null;
  }

  let cartList = null;

  if (isAuth && cart) {
    cartList = cart.products.map(p => (
      <CartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} cart={cart} />
    ));
  } else if (localCart && localCart.products.length >= 1) {
    cartList = localCart.products.map(p => {
      const filterProduct = products.filter(prod => {
        return prod['_id'] === p.product;
      });

      return <CartItem key={p.product} product={filterProduct[0]} cartQuantity={p.cartQuantity} cart={cart} />;
    });
  } else {
    cartList = (
      <li style={{ textAlign: 'center', padding: '50px 0' }} className={styles.title}>
        В корзине пока нет товаров
      </li>
    );
  }

  return (
    <Modal buttonHandler={buttonHandler} display={display}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.header}>
        <div className={styles.headerQuantity}>Количество</div>
        <div className={styles.headerPrice}>Стоимость</div>
      </div>

      <ul className={styles.list}>{cartList}</ul>

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
