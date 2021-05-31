/* eslint-disable dot-notation */
import React from 'react';
import { useSelector } from 'react-redux';
import { getCartSelector, getLocalCartSelector } from '../../store/cart/selectors';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { getProductsSelector, productsLoadingSelector } from '../../store/products/selectors';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';

const CartList = () => {
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const cart = useSelector(getCartSelector);
  const localCart = useSelector(getLocalCartSelector);
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  let cartList = null;

  if (isAuth && cart) {
    cartList = cart.products.map(p => (
      <CartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} cart={cart} />
    ));
  } else if (localCart && localCart.products.length >= 1 && !productsLoading) {
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
  return <ul className={styles.list}>{cartList}</ul>;
};

export default CartList;
