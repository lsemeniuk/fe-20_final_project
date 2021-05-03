/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './CustomerSection.module.scss';
import { ORDERS_ROUTE, PERSONAL_INFO_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';
import PersonalDataForm from './PersonalDataForm';
import Container from '../../components/Container/Container';
import ProductItem from '../../components/ProductItem/ProductItem';
import FavsClearModal from '../../components/modals/FavsClearModal/FavsClearModal';
// import { clearFavoritesAction } from '../../store/favorites/actions';
// import FavsClearModal from '../../components/modals/FavsClearModal/FavsClearModal';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className={style.title}>Личные данные</h1>
      <PersonalDataForm />
    </div>
  );
};

const Orders = () => {
  return <h1 className={style.title}>Заказы</h1>;
};

const Wishlist = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const favorites = useSelector(state => state.favorites.data);
  // const dispatch = useDispatch();

  // dispatch(clearFavoritesAction());

  return (
    <div>
      <FavsClearModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={style.row}>
        <h1 className={style.title}>Список желаний</h1>
        {favorites.length > 0 && (
          <span className={style.clear} onClick={() => setModalOpen(true)}>
            Очистить
          </span>
        )}
      </div>
      {!favorites.length && <p>Вы еще не добавили товары в список желаний</p>}
      {favorites.map(item => (
        <ProductItem key={item._id} product={item} />
      ))}
    </div>
  );
};

const CustomerSection = () => {
  return (
    <Container>
      <div className={style.flex}>
        <nav>
          <ul>
            <li>
              <NavLink exact to={PERSONAL_INFO_ROUTE} className={style.link} activeClassName={style.link__active}>
                Личные данные
              </NavLink>
            </li>
            <li>
              <NavLink to={ORDERS_ROUTE} className={style.link} activeClassName={style.link__active}>
                Заказы
              </NavLink>
            </li>
            <li>
              <NavLink to={WISH_LIST_ROUTE} className={style.link} activeClassName={style.link__active}>
                Списки желаний
              </NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Route exact to='/' /> <Redirect to={PERSONAL_INFO_ROUTE} />
          <Route path={PERSONAL_INFO_ROUTE} component={PersonalInfo} />
          <Route path={ORDERS_ROUTE} component={Orders} />
          <Route path={WISH_LIST_ROUTE} component={Wishlist} />
        </section>
      </div>
    </Container>
  );
};

export default CustomerSection;
