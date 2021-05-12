/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_ROUTE } from '../../utils/consts';
import styles from './SliderCart.module.scss';
import Button from '../Button/Button';
import { addProductToWishlistOperation, deleteProductFromWishlishtOperation } from '../../store/wishList/operations';
import Icons from '../Icons/Icons';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';
import { cartLoadingSelector, getCartSelector } from '../../store/cart/selectors';
import { saveModalCartAction } from '../../store/modal/actions';
import { addProductToCartOperation } from '../../store/cart/operations';

const SliderCart = ({ product }) => {
  const dispatch = useDispatch();
  const { imageUrls, itemNo, currentPrice, name, previousPrice } = product;
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const cartLoading = useSelector(cartLoadingSelector);
  const cart = useSelector(getCartSelector);
  const id = product['_id'];

  let idCartList = [];
  if (!cartLoading) {
    if (cart) {
      idCartList = cart.products.map(prod => {
        return prod.product['_id'];
      });
    }
  }

  let idWishList = [];
  if (!wishListLoading) {
    if (wishList) {
      idWishList = wishList.products.map(prod => {
        return prod['_id'];
      });
    }
  }

  const openCart = () => {
    dispatch(saveModalCartAction(true));
  };

  const addToCart = () => {
    dispatch(addProductToCartOperation(id));
  };

  const addToWishList = () => {
    dispatch(addProductToWishlistOperation(id));
  };
  const deleteToWishList = () => {
    dispatch(deleteProductFromWishlishtOperation(id, wishList));
  };

  return (
    <div>
      <div className={styles.cart}>
        <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
          <img className={styles.image} src={imageUrls[0]} alt='watch' />
        </NavLink>
        <div className={styles.description}>
          <div className={styles.nameWrapper}>
            <NavLink className={styles.name} to={`${PRODUCT_ROUTE}/${itemNo}`}>
              {name}
            </NavLink>
          </div>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{currentPrice} грн</p>
            {previousPrice && <s className={styles.previousPrice}>{previousPrice} грн</s>}
          </div>
          <div className={styles.buttonSection}>
            {idCartList.includes(id) ? (
              <Button onClick={openCart} variant='outline' title='В корзине' />
            ) : (
              <Button onClick={addToCart} title='Купить' />
            )}
            <span>
              {idWishList.includes(id) ? (
                <Icons onClick={deleteToWishList} type='navHeart' color='#ffd200' filled width={30} height={30} />
              ) : (
                <Icons onClick={addToWishList} type='navHeart' color='black' width={30} height={30} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SliderCart;
