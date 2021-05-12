/* eslint-disable dot-notation */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addProductToWishlistOperation, deleteProductFromWishlishtOperation } from '../../store/wishList/operations';
import Icons from '../Icons/Icons';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';

const AddToWishListBtn = ({ id }) => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);

  let idWishList = [];
  if (!wishListLoading) {
    if (wishList) {
      idWishList = wishList.products.map(prod => {
        return prod['_id'];
      });
    }
  }

  const addToWishList = () => {
    dispatch(addProductToWishlistOperation(id));
  };
  const deleteToWishList = () => {
    dispatch(deleteProductFromWishlishtOperation(id, wishList));
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
