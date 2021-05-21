import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishListSelector, wishListLoadingSelector } from '../../../store/wishList/selectors';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Loader from '../../../components/Loader/Loader';
import { deleteWishListOperation } from '../../../store/wishList/operations';
import styles from './WishList.module.scss';
import Button from '../../../components/Button/Button';
import { getCustomerIsAuthSelector } from '../../../store/customer/selectors';
import { saveWishListAction } from '../../../store/wishList/actions';

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  let favProducts = [];

  if (isAuth) {
    if (wishList !== null) {
      favProducts = wishList.products;
    }
  } else {
    favProducts = wishList;
  }

  const clearFavorites = () => {
    if (isAuth) {
      dispatch(deleteWishListOperation());
      localStorage.removeItem('WishList');
    } else {
      dispatch(saveWishListAction([]));
      localStorage.removeItem('WishList');
    }
  };

  if (isAuth && wishListLoading) {
    return (
      <ContainerPage>
        <Loader fixed />
      </ContainerPage>
    );
  }

  return (
    <ContainerPage style={isAuth ? {} : { width: '70%', margin: '0 auto', minHeight: '500px', marginTop: '50px' }}>
      <div>
        <header className={styles.header}>
          <p className={styles.title}>Список желаний</p>
          {favProducts.length !== 0 && <Button onClick={clearFavorites} title='Очистить' variant='outline' />}
        </header>
        {favProducts.length !== 0 ? (
          <div className={styles.wrapper}>
            {favProducts.map(i => (
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
