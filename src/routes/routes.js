import {
  ADMIN_ROUTE,
  PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  PRODUCTS_ROUTE,
  CHECKOUT_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,

  // FILTER_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Products from '../pages/Products/Products';
import Admin from '../pages/Admin';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';

import Page404 from '../pages/Page404/Page404';
import PersonalInfo from '../pages/User/PersonalInfo/PersonalInfo';
import Orders from '../pages/User/Orders/Orders';
import WishList from '../pages/User/WishList/WishList';

// import Select from '../components/SelectBar/Select/Select';

export const publicRoutes = [
  {
    name: 'Главная',
    path: INDEX_ROUTE,
    Component: Index,
  },
  {
    path: `${PRODUCT_ROUTE}/:id`,
    Component: Product,
  },
  {
    name: 'Товары',
    path: `${PRODUCTS_ROUTE}/:categories`,
    Component: Products,
  },
  {
    name: 'Товары',
    path: PRODUCTS_ROUTE,
    Component: Products,
  },
  {
    name: 'Оформить заказ',
    path: CHECKOUT_ROUTE,
    Component: CheckoutCart,
  },
  {
    name: 'Страницы не существует',
    path: '/page404',
    Component: Page404,
  },
];

export const userRoutes = [
  {
    name: 'Пользователь',
    path: PERSONAL_INFO_ROUTE,
    Component: PersonalInfo,
  },
  // {
  //   path: `${PRODUCT_ROUTE}/:id`,
  //   Component: Select,
  // },

  {
    name: 'Заказы',
    path: ORDERS_ROUTE,
    Component: Orders,
  },
  {
    name: 'Список желаний',
    path: WISH_LIST_ROUTE,
    Component: WishList,
  },
];

export const adminRoutes = [
  {
    name: 'Администратор',
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
