import {
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  PRODUCTS_ROUTE,
  CHECKOUT_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  ADM_CATALOG_ROUTE,
  PRODUCT_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Products from '../pages/Products/Products';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import Page404 from '../pages/Page404/Page404';
import PersonalInfo from '../pages/User/PersonalInfo/PersonalInfo';
import Orders from '../pages/User/Orders/Orders';
import WishList from '../pages/User/WishList/WishList';
import Product from '../pages/Product/Product';
import Catalog from '../pages/Admin/Catalog/Catalog';

export const publicRoutes = [
  {
    name: 'Главная',
    path: INDEX_ROUTE,
    Component: Index,
  },
  {
    name: 'Отдельный товар',
    path: `${PRODUCT_ROUTE}/:id`,
    Component: Product,
  },
  {
    name: 'Категории',
    path: `${PRODUCTS_ROUTE}/:categories`,
    Component: Products,
  },
  {
    name: 'Все товары',
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
    path: '*',
    Component: Page404,
  },
];

export const userRoutes = [
  {
    name: 'Пользователь',
    path: PERSONAL_INFO_ROUTE,
    Component: PersonalInfo,
  },

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
    name: 'Каталог',
    path: ADM_CATALOG_ROUTE,
    Component: Catalog,
  },
];
