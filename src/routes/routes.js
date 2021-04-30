import {
  ADMIN_ROUTE,
  PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  PRODUCTS_ROUTE,
  CHECKOUT_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Home from '../pages/Home/Home';
import Admin from '../pages/Admin/Admin';
import WishList from '../pages/WishList/WishList';
import Orders from '../pages/Orders/Orders';
import PersonalInfo from '../pages/PersonalInfo/PersonalInfo';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import ProductScreenAdaptive from '../pages/ProductScreenAdaptive/ProductScreenAdaptive';

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
  {
    path: `${PRODUCT_ROUTE}/:id`,
    Component: ProductScreenAdaptive,
  },
  {
    path: `${PRODUCTS_ROUTE}/:categories`,
    Component: Home,
  },
  {
    path: PRODUCTS_ROUTE,
    Component: ProductScreenAdaptive,
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
