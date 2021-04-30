import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import PersonalInfoForm from './PersonalInfoForm';
import style from './CustomerSection.module.scss';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className={style.title}>Личные данные</h1>
      <PersonalInfoForm />
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
    <div className={style.flex}>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/personal-info' className={style.link} activeClassName={style.link__active}>
              Личные данные
            </NavLink>
          </li>
          <li>
            <NavLink to='/orders' className={style.link} activeClassName={style.link__active}>
              Заказы
            </NavLink>
          </li>
          <li>
            <NavLink to='/wishlist' className={style.link} activeClassName={style.link__active}>
              Списки желаний
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Route exact to='/' /> <Redirect to='/personal-info' />
        <Route path='/personal-info' component={PersonalInfo} />
        <Route path='/orders' component={Orders} />
        <Route path='/wishlist' component={Wishlist} />
      </section>
    </div>
  );
};

export default CustomerSection;
