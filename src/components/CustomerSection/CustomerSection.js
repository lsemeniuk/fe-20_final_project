import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import PersonalDataForm from './PersonalDataForm';
import style from './CustomerSection.module.scss';
import Container from '../Container/Container';
import { ORDERS_ROUTE, PERSONAL_INFO_ROUTE, WISH_LIST_ROUTE } from '../../utils/consts';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className={style.title}>Личные данные</h1>
      <PersonalDataForm />
    </div>
  );
};

const Orders = () => {
  return <h2>Orders Page</h2>;
};

const Wishlist = () => {
  return <h2>WishList Page</h2>;
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
