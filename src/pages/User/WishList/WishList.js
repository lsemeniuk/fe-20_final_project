import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListSelector, wishListLoadingSelector } from '../../../store/wishList/selectors';
import PageContainer from '../../../components/Container/PageContainer/PageContainer';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Loader from '../../../components/Loader/Loader';
import { getWishListOperation, deleteWishList } from '../../../store/wishList/operations';
import styles from './WishList.module.scss';
import Button from '../../../components/Button/Button';

const WishList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getWishListSelector);
  const isLoading = useSelector(wishListLoadingSelector);
  useEffect(() => {
    dispatch(getWishListOperation());
  }, []);

  const clearFavourites = () => {
    dispatch(deleteWishList());
  };
  if (!items) {
    return (
      <PageContainer>
        <p className={styles.title}>Список желаний</p>
        <p className={styles.noItems}>Вы еще не добавили товары в список желаний</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <header className={styles.header}>
            <p className={styles.title}>Список желаний</p>
            <Button onClick={clearFavourites} title='Очистить' variant='outline' />
          </header>
          <div className={styles.wrapper}>
            {items.products.map(i => (
              <ProductCard key={i.itemNo} product={i} inCart />
            ))}
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default WishList;
