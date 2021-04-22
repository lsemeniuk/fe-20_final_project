import {
  ADMIN_ROUTE,
  MEN_ROUTE,
  WOMEN_ROUTE,
  CHILDREN_ROUTE,
  ACCESSORIES_ROUTE,
  PRODUCT_ROUTE,
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Men from '../pages/Men/Men';
import Women from '../pages/Women/Women';
import Children from '../pages/Children/Children';
import Accessories from '../pages/Accessories/Accessories';
import Admin from '../pages/Admin/Admin';
import ProductPage from '../pages/ProductPage/ProductPage';
import WishList from '../pages/WishList/WishList';
import Orders from '../pages/Orders/Orders';
import PersonalInfo from '../pages/PersonalInfo/PersonalInfo';

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
    path: MEN_ROUTE,
    Component: Men,
  },
  {
    path: WOMEN_ROUTE,
    Component: Women,
  },
  {
    path: CHILDREN_ROUTE,
    Component: Children,
  },
  {
    path: ACCESSORIES_ROUTE,
    Component: Accessories,
  },
  {
    path: WISH_LIST_ROUTE,
    Component: WishList,
  },
];
