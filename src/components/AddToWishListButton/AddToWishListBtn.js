/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addProductToWishlistOperation, deleteProductFromWishlishtOperation } from '../../store/wishList/operations';
import Icons from '../Icons/Icons';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
// import { saveWishListAction, wishListLoadingAction } from '../../store/wishList/actions';
import { saveWishListAction } from '../../store/wishList/actions';

const AddToWishListBtn = ({ id }) => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  let storageWishList = JSON.parse(localStorage.getItem('WishList')) || [];
  let idWishList = [];

  useEffect(() => {
    if (!isAuth) {
      // if (!wishListLoading) {
      //   dispatch(wishListLoadingAction(true));
      // }
      dispatch(saveWishListAction(storageWishList));
    }
  }, []);

  if (isAuth) {
    if (!wishListLoading) {
      if (wishList) {
        idWishList = wishList.products.map(prod => {
          return prod['_id'];
        });
      }
    }
  } else {
    idWishList = wishList || [];
  }

  const addToWishList = () => {
    storageWishList = JSON.parse(localStorage.getItem('WishList')) || [];
    if (isAuth) {
      dispatch(addProductToWishlistOperation(id));
    } else {
      localStorage.setItem('WishList', JSON.stringify([...storageWishList, id]));
      dispatch(saveWishListAction([...wishList, id]));
    }
  };
  const deleteToWishList = () => {
    if (isAuth) {
      dispatch(deleteProductFromWishlishtOperation(id, wishList));
    } else {
      localStorage.setItem('WishList', JSON.stringify([...storageWishList.filter(i => i !== id)]));
      dispatch(saveWishListAction([...wishList.filter(itemId => itemId !== id)]));
    }
  };

  return (
    <div>
      {idWishList.includes(id) ? (
        <Icons onClick={deleteToWishList} type='navHeart' color='#ffd200' filled width={30} height={30} />
      ) : (
        <Icons onClick={addToWishList} type='navHeart' color='black' width={30} height={30} />
      )}
    </div>
  );
};

AddToWishListBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToWishListBtn;
