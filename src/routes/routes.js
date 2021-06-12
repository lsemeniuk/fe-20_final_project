import {
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  CHECKOUT_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  ADM_CATALOG_ROUTE,
  PRODUCT_ROUTE,
  CUSTOMER_WISH_LIST_ROUTE,
  ADM_PRODUCTS_ROUTE,
  ADM_BRANDS_ROUTE,
  ADM_COLORS_ROUTE,
  ADM_ORDERS_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import Page404 from '../pages/Page404/Page404';
import PersonalInfo from '../pages/User/PersonalInfo/PersonalInfo';
import Orders from '../pages/User/Orders/Orders';
import OrdersAdmin from '../pages/Admin/OrdersAdmin/OrdersAdmin';
import WishList from '../pages/User/WishList/WishList';
import Catalog from '../pages/Admin/Catalog/Catalog';
import Product from '../pages/Product/Product';
import Brands from '../pages/Admin/Brands/Brands';
import Colors from '../pages/Admin/Colors/Colors';

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
    name: 'Оформить заказ',
    path: CHECKOUT_ROUTE,
    Component: CheckoutCart,
  },
  {
    name: 'Список желаний',
    path: CUSTOMER_WISH_LIST_ROUTE,
    Component: WishList,
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
    name: 'Заказы',
    path: ADM_ORDERS_ROUTE,
    Component: OrdersAdmin,
  },
  {
    name: 'Каталог',
    path: ADM_CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    name: 'Продукты',
    path: ADM_PRODUCTS_ROUTE,
    Component: Catalog,
  },
  {
    name: 'Бренды',
    path: ADM_BRANDS_ROUTE,
    Component: Brands,
  },
  {
    name: 'Цвета',
    path: ADM_COLORS_ROUTE,
    Component: Colors,
  },
];
