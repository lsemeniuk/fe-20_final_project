/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addProductToWishlistOperation,
  deleteProductFromWishlishtOperation,
  setFavForCustomerOperation,
} from '../../store/wishList/operations';
import Icons from '../Icons/Icons';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { saveWishListAction } from '../../store/wishList/actions';
import { getProductsSelector } from '../../store/products/selectors';

const AddToWishListBtn = ({ id, itemNo }) => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const products = useSelector(getProductsSelector);
  let storageWishList = JSON.parse(localStorage.getItem('WishList')) || [];
  let idWishList = [];

  useEffect(() => {
    if (!isAuth && storageWishList.length !== 0) {
      const storageItemNo = storageWishList.map(itemData => itemData.itemNo);
      const newStorageFav = products.filter(product => storageItemNo.includes(product.itemNo));
      dispatch(saveWishListAction(newStorageFav));
      console.log('lol');
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
    idWishList = wishList.map(itemData => itemData['_id']) || [];
    // console.log(wishList);
  }

  const addToWishList = () => {
    storageWishList = JSON.parse(localStorage.getItem('WishList')) || [];
    if (isAuth) {
      dispatch(addProductToWishlistOperation(id));
    } else {
      localStorage.setItem('WishList', JSON.stringify([...storageWishList, { itemNo, id }]));
      // dispatch(saveWishListAction([...wishList, { itemNo, id }]));
      dispatch(setFavForCustomerOperation(itemNo, wishList));
    }
  };
  const deleteToWishList = () => {
    if (isAuth) {
      dispatch(deleteProductFromWishlishtOperation(id, wishList));
    } else {
      // eslint-disable-next-line max-len
      localStorage.setItem('WishList', JSON.stringify([...storageWishList.filter(i => i.itemNo !== itemNo)]));
      // console.log('to equal', { id });
      // console.log(...storageWishList);
      dispatch(saveWishListAction([...wishList.filter(i => i.itemNo !== itemNo)]));
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
  itemNo: PropTypes.string.isRequired,
};

export default AddToWishListBtn;
