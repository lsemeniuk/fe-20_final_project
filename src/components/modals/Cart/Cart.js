import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from '../../CartItem/CartItem';
import Modal from '../Modal/Modal';
import styles from './Cart.module.scss';
import Button from '../../Button/Button';
import { CHECKOUT_ROUTE } from '../../../utils/consts';

const Cart = ({ buttonHandler }) => {
  const [cart, setcart] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios.get('../../cart.json').then(res => {
      setcart([...res.data.products]);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  const cartList = cart.map(p => <CartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} />);

  return (
    <Modal buttonHandler={buttonHandler}>
      <h2 className={styles.title}>Корзина</h2>
      <div className={styles.header}>
        <div className={styles.quantity}>Количество</div>
        <div className={styles.price}>Стоимость</div>
      </div>
      <div className={styles.list}>{cartList}</div>
      <div className={styles.checkoutContainer}>
        <div className={styles.back}>
          <span>&#8592; Вернуться к покупкам</span>
        </div>
        <div className={styles.checkoutBlock}>
          <h3>
            <span>Итого</span>
          </h3>
          <NavLink to={CHECKOUT_ROUTE}>
            <Button title='Оформить заказ' />
          </NavLink>
        </div>
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
};

export default Cart;
