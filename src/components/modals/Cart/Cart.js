import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import Modal from '../Modal/Modal';
import Button from '../../Button/Button';
import { CHECKOUT_ROUTE } from '../../../utils/consts';
import { replace } from '../../../utils/func';
import RecommendList from './RecommendList/RecommendList';
import styles from './Cart.module.scss';
import Loader from '../../Loader/Loader';

const Cart = ({ buttonHandler, display }) => {
  const [cart, setcart] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios.get('../../cart.json').then(res => {
      setcart([...res.data.products]);
      setisLoading(false);
    });
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.map(p => {
      totalPrice += p.cartQuantity * p.product.currentPrice;
      return totalPrice;
    });
    return replace(totalPrice);
  };

  if (isLoading) {
    return (
      <Modal buttonHandler={buttonHandler} display={display}>
        <Loader />
      </Modal>
    );
  }

  const cartList = cart.map(p => <CartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} />);

  return (
    <Modal buttonHandler={buttonHandler} display={display}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.header}>
        <div className={styles.headerQuantity}>Количество</div>
        <div className={styles.headerPrice}>Стоимость</div>
      </div>
      <div className={styles.list}>{cartList}</div>
      <div className={`${styles.list} ${styles.checkoutContainer}`}>
        <div className={styles.backContainer}>
          <span className={styles.back} onClick={() => buttonHandler()}>
            &#8592; Вернуться к покупкам
          </span>
        </div>
        <div className={styles.checkoutBlock}>
          <h3 className={styles.price}>
            <span className={styles.total}>Итого</span>
            {calculateTotalPrice()} грн
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
