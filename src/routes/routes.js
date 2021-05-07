import {
  ADMIN_ROUTE,
  // PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  PRODUCTS_ROUTE,
  CHECKOUT_ROUTE,
  PERSONAL_INFO_ROUTE,
  ORDERS_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Products from '../pages/Products/Products';
import Admin from '../pages/Admin/Admin';
import WishList from '../pages/User/WishList/WishList';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import Page404 from '../pages/Page404/Page404';
import PersonalInfo from '../pages/User/PersonalInfo';
import Orders from '../pages/User/Orders/Orders';

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const userRoutes = [
  {
    path: PERSONAL_INFO_ROUTE,
    Component: PersonalInfo,
  },
  {
    path: ORDERS_ROUTE,
    Component: Orders,
  },
  {
    path: WISH_LIST_ROUTE,
    Component: WishList,
  },
];

export const publicRoutes = [
  {
    path: INDEX_ROUTE,
    Component: Index,
  },
  // {
  //   path: `${PRODUCT_ROUTE}/:id`,
  //   Component: Product,
  // },
  {
    path: `${PRODUCTS_ROUTE}/:categories`,
    Component: Products,
  },
  {
    path: PRODUCTS_ROUTE,
    Component: Products,
  },
  {
    path: CHECKOUT_ROUTE,
    Component: CheckoutCart,
  },
  {
    path: '/page404',
    Component: Page404,
  },
];
