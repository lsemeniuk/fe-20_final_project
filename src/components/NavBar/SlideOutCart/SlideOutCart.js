/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import MobileCartItem from './MobileCartItem/MobileCartItem';
import CustomSlider from '../../sliders/CustomSlider/CustomSlider';
import styles from './SlideOutCart.module.scss';
import Icons from '../../Icons/Icons';
import { cartLoadingSelector, cartTotalPriceSelector, getCartSelector } from '../../../store/cart/selectors';
import { replace } from '../../../utils/func';
import { CHECKOUT_ROUTE } from '../../../utils/consts';

const SlideOutCart = ({ isCartOpen, toggleSlideCart }) => {
  const cart = useSelector(getCartSelector);
  const history = useHistory();
  const cartLoading = useSelector(cartLoadingSelector);
  const totalPrice = replace(useSelector(cartTotalPriceSelector));

  if (cartLoading) {
    return null;
  }
  const products = cart ? cart.products : [];

  const cartProductList = products?.map(p => (
    <MobileCartItem key={p.product.itemNo} product={p.product} cartQuantity={p.cartQuantity} cart={cart} />
  ));

  const handleCheckout = () => {
    toggleSlideCart();
    history.push(CHECKOUT_ROUTE);
  };

  return (
    <>
      <aside className={isCartOpen ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <div className={styles.icon__container} onClick={toggleSlideCart}>
          <Icons type='left' filled width={40} height={40} />
        </div>
        <div className={styles.title__wrapper}>
          <h2 className={styles.title}>Корзина</h2>
        </div>
        {products.length === 0 ? (
          <div className={styles.bag__block}>
            <Icons type='navBag2' filled={false} width={100} height={100} />
            <p>Нет товаров</p>
          </div>
        ) : (
          <div>
            <ul className={styles.productList__container}>{cartProductList}</ul>
          </div>
        )}
        {products.length > 0 && (
          <h3 className={styles.price}>
            <span className={styles.total}>Итого</span> {totalPrice} грн
          </h3>
        )}

        {products.length > 0 && (
          <div className={styles.btn__container}>
            <div onClick={handleCheckout} className={styles.btn__order}>
              Оформить заказ
            </div>
          </div>
        )}
        <div className={styles.btn__container}>
          <div onClick={toggleSlideCart} className={`${styles.btn__order} ${styles.btn__back}`}>
            <Icons type='left' filled width={40} height={40} />
            Вернуться к покупкам
          </div>
        </div>
        <CustomSlider title='Возможно, Вам понравится:' />
      </aside>
    </>
  );
};
SlideOutCart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  toggleSlideCart: PropTypes.func.isRequired,
};

export default SlideOutCart;
