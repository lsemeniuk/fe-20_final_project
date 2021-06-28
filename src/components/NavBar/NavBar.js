/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { INDEX_ROUTE, WISH_LIST_ROUTE, CUSTOMER_WISH_LIST_ROUTE, PRODUCTS_ROUTE } from '../../utils/consts';
import Container from '../Container/Container';
import Icons from '../Icons/Icons';
import MyOrders from './MyOrders/MyOrders';
import Logo from '../../theme/Logo';
import CategoriesList from '../CategoriesList/CategoriesList';
import User from './User/User';
import RegAuth from '../RegAuth/RegAuth';
import { getModalAuthRegSelector } from '../../store/modal/selectors';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import { getCustomerIsAuthSelector } from '../../store/customer/selectors';
import { getWishListSelector, wishListLoadingSelector } from '../../store/wishList/selectors';
import { getWishListOperation, updateWishListOperation } from '../../store/wishList/operations';
import { getCartOperation, updateCartOperation, setCartTotalPriceOperation } from '../../store/cart/operations';
import { getCatalogOperation } from '../../store/catalog/operations';
import { wishListLoadingAction } from '../../store/wishList/actions';
import { getProductsOperation } from '../../store/products/operations';
import { getColorsOperation } from '../../store/colors/operations';
import styles from './NavBar.module.scss';
import { getProductsSelector } from '../../store/products/selectors';
import { setQueryAction } from '../../store/search/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modalAuthReg = useSelector(getModalAuthRegSelector);
  const allProducts = useSelector(getProductsSelector);
  const isAuth = useSelector(getCustomerIsAuthSelector);
  const wishList = useSelector(getWishListSelector);
  const wishListLoading = useSelector(wishListLoadingSelector);
  const location = useLocation();
  const localCart = JSON.parse(localStorage.getItem('cart'));
  const [searchWords, setSearchWords] = useState('');
  const [showInput, setShowInput] = useState(false);

  const storageWishList = { products: JSON.parse(localStorage.getItem('WishList')) || [] };
  let favorites = 0;

  if (isAuth) {
    if (!wishListLoading && wishList) {
      favorites = wishList.products.length;
    }
  } else {
    favorites = wishList !== null ? wishList.length || 0 : 0;
  }

  useEffect(() => {
    dispatch(getCatalogOperation());
    dispatch(getProductsOperation());
    dispatch(wishListLoadingAction(true));
    dispatch(getColorsOperation());
    if (isAuth) {
      dispatch(getWishListOperation());
      dispatch(updateWishListOperation(storageWishList));
      if (localCart) {
        dispatch(updateCartOperation(localCart));
      } else {
        dispatch(getCartOperation());
      }
    } else {
      dispatch(setCartTotalPriceOperation(localCart));
    }
  }, [isAuth]);

  const handleClickSearch = () => setShowInput(!showInput);
  const clearInput = () => setSearchWords('');

  const handleClickOnFoundItems = value => {
    dispatch(setQueryAction(value));
    handleClickSearch();
    history.push(`${PRODUCTS_ROUTE}/search/${value}`);
    window.scrollTo(0, 350);
  };

  const list = allProducts
    .filter(p =>
      searchWords !== ''
        ? p.name.toLowerCase().includes(searchWords.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchWords.toLowerCase()) ||
          p.color.toLowerCase().includes(searchWords.toLowerCase()) ||
          p.description.toLowerCase().includes(searchWords.toLowerCase())
        : null
    )
    .map(p => (
      <NavLink to={`/products/search/${p.name}`} key={p.itemNo} className={styles.searchLink}>
        <li className={styles.searchList__item} onClick={() => handleClickOnFoundItems(p.brand)}>
          {p.name}
          <div>
            <img src={p.imageUrls[0].smallImage} width={30} height={30} alt='product pic' />
          </div>
        </li>
      </NavLink>
    ))
    .slice(0, 6);

  const authRegHandler = () => {
    dispatch(saveModalAuthRegAction(!modalAuthReg));
    document.body.classList.toggle('lock');
  };

  const heartJsx = [
    <div key='heart' className={styles.iconListItem}>
      <Icons type='navHeart' color='#FFF' width={30} height={30} />
    </div>,
  ];

  return (
    <div className={styles.bgContainer}>
      <Container>
        <nav>
          <div className={styles.flexContainer}>
            <div>
              {location.pathname === '/' ? (
                <Logo white />
              ) : (
                <NavLink to={INDEX_ROUTE}>
                  <Logo white />
                </NavLink>
              )}
            </div>
            <div className={styles.menuContainer}>
              <ul className={styles.menuList}>
                <CategoriesList className={styles.menuLink} activeClassName={styles.menuLinkActive} />
              </ul>
              <ul className={styles.iconList}>
                <div
                  className={
                    location.pathname === '/' ? `${styles.input__block} ${styles.hidden}` : `${styles.input__block}`
                  }
                >
                  <div className={styles.input__parent}>
                    <input
                      type='text'
                      placeholder='Я ищу...'
                      onChange={e => setSearchWords(e.target.value)}
                      value={searchWords}
                      className={showInput ? `${styles.search__input} ${styles.showInput}` : `${styles.search__input}`}
                    />
                    {showInput && (
                      <div className={styles.close} onClick={clearInput}>
                        <Icons type='summer' />
                      </div>
                    )}
                    {showInput && <ul className={styles.searchList}>{list}</ul>}
                  </div>
                  <li onClick={handleClickSearch} className={styles.searchIcon__container}>
                    <Icons type='search' width={40} height={40} />
                  </li>
                </div>
                <li key='wishList'>
                  {wishList && favorites !== 0 ? (
                    <NavLink to={isAuth ? WISH_LIST_ROUTE : CUSTOMER_WISH_LIST_ROUTE}>
                      {heartJsx}
                      <span
                        className={
                          location.pathname === '/' ? `${styles.favorites} ${styles.index}` : `${styles.favorites}`
                        }
                      >
                        {favorites}
                      </span>
                    </NavLink>
                  ) : (
                    heartJsx
                  )}
                </li>
                <li key='personalInfo' className={styles.iconListItem}>
                  <User modalHandler={authRegHandler} />
                </li>
                <li key='cart' className={styles.iconListItem}>
                  <MyOrders />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {!isAuth && modalAuthReg && <RegAuth />}
      </Container>
    </div>
  );
};

export default NavBar;
