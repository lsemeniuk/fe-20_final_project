import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListSelector, wishListLoadingSelector } from '../../../store/wishList/selectors';
import PageContainer from '../../../components/Container/PageContainer/PageContainer';
import ProductItem from '../../../components/ProductItem/ProductItem';
import Loader from '../../../components/Loader/Loader';
import { getWishListOperation } from '../../../store/wishList/operations';
import styles from './WishList.module.scss';

const WishList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getWishListSelector);
  const isLoading = useSelector(wishListLoadingSelector);

  useEffect(() => {
    dispatch(getWishListOperation());
  }, []);

  const favProducts = items.products.map(i => <ProductItem key={i.itemNo} product={i} />);

  return <PageContainer>{isLoading ? <Loader /> : <div className={styles.wrapper}>{favProducts}</div>}</PageContainer>;
};

export default WishList;
