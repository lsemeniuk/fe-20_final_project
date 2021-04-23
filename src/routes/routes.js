import {
  ADMIN_ROUTE,
  PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  CHECKOUT_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Admin from '../pages/Admin/Admin';
import WishList from '../pages/WishList/WishList';
import Orders from '../pages/Orders/Orders';
import PersonalInfo from '../pages/PersonalInfo/PersonalInfo';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import ProductScreen from '../pages/ProductScreen/ProductScreen';

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
    Component: ProductScreen,
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
