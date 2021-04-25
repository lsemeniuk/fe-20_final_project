import {
  ADMIN_ROUTE,
  PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  CHECKOUT_ROUTE,
  PRODUCTS_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import ProductPage from '../pages/ProductPage/ProductPage';
import WishList from '../pages/WishList/WishList';
import Orders from '../pages/Orders/Orders';
import PersonalInfo from '../pages/PersonalInfo/PersonalInfo';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: ORDERS_ROUTE,
    Component: Orders,
  },
  {
    path: PERSONAL_INFO_ROUTE,
    Component: PersonalInfo,
  },
];

export const publicRoutes = [
  {
    path: INDEX_ROUTE,
    Component: Index,
  },
  {
    path: `${PRODUCT_ROUTE}/:id`,
    Component: ProductPage,
  },
  {
    path: `${PRODUCTS_ROUTE}/:categories`,
    Component: Home,
  },
  {
    path: PRODUCTS_ROUTE,
    Component: ProductPage,
  },
  {
    path: WISH_LIST_ROUTE,
    Component: WishList,
  },
  {
    path: CHECKOUT_ROUTE,
    Component: CheckoutCart,
  },
];
