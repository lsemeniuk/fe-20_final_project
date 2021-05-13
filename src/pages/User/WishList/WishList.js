import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListSelector, wishListLoadingSelector } from '../../../store/wishList/selectors';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Loader from '../../../components/Loader/Loader';
import { deleteWishListOperation } from '../../../store/wishList/operations';
import styles from './WishList.module.scss';
import Button from '../../../components/Button/Button';

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);

  const clearFavorites = () => {
    dispatch(deleteWishListOperation());
  };

  if (wishListLoading) {
    return (
      <ContainerPage>
        <Loader fixed />
      </ContainerPage>
    );
  }

  return (
    <ContainerPage>
      <div>
        <header className={styles.header}>
          <p className={styles.title}>Список желаний</p>
          {wishList && <Button onClick={clearFavorites} title='Очистить' variant='outline' />}
        </header>
        {wishList ? (
          <div className={styles.wrapper}>
            {wishList.products.map(i => (
              <ProductCard key={i.itemNo} product={i} inCart />
            ))}
          </div>
        ) : (
          <p className={styles.noItems}>Вы еще не добавили товары в список желаний</p>
        )}
      </div>
    </ContainerPage>
  );
};

export default WishList;
