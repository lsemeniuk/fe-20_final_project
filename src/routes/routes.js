import {
  INDEX_ROUTE,
  WISH_LIST_ROUTE,
  PRODUCTS_ROUTE,
  CHECKOUT_ROUTE,
  ORDERS_ROUTE,
  PERSONAL_INFO_ROUTE,
  ADM_CATALOG_ROUTE,
  ADM_PRODUCTS_ROUTE,
  PRODUCT_ROUTE,
  ADM_BRANDS_ROUTE,
  ADM_COLORS_ROUTE,
  ADM_FILTERS_ROUTE,
  ADM_SLIDER_ROUTE,
  ADM_COMMENTS_ROUTE,
  ADM_SUBSCRIBERS_ROUTE,
  ADM_LINKS_ROUTE,
  ADM_PAGES_ROUTE,
  ADM_CONFIGS_ROUTE,
} from '../utils/consts';
import Index from '../pages/Index/Index';
import Products from '../pages/Products/Products';
import CheckoutCart from '../pages/CheckoutCart/CheckoutCart';
import Page404 from '../pages/Page404/Page404';
import PersonalInfo from '../pages/User/PersonalInfo/PersonalInfo';
import Orders from '../pages/User/Orders/Orders';
import WishList from '../pages/User/WishList/WishList';
import Catalog from '../pages/Admin/Catalog/Catalog';
import Product from '../pages/Product/Product';
import Brands from '../pages/Admin/Brands/Brands';
import AdminProducts from '../pages/Admin/AdminProducts/AdminProducts';
import Colors from '../pages/Admin/Colors/Colors';
import Filters from '../pages/Admin/Filters/Filters';
import Sliders from '../pages/Admin/Sliders/Sliders';
import Comments from '../pages/Admin/Comments/Comments';
import Subscribers from '../pages/Admin/Subscribers/Subscribers';
import Links from '../pages/Admin/Links/Links';
import AdminPages from '../pages/Admin/AdminPages/AdminPages';
import GlobalSettings from '../pages/Admin/GlobalSettings/GlobalSettings';

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
  {
    name: 'Продукты',
    path: ADM_PRODUCTS_ROUTE,
    Component: AdminProducts,
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
  {
    name: 'Фильтры',
    path: ADM_FILTERS_ROUTE,
    Component: Filters,
  },
  {
    name: 'Слайдеры',
    path: ADM_SLIDER_ROUTE,
    Component: Sliders,
  },
  {
    name: 'Комментарии',
    path: ADM_COMMENTS_ROUTE,
    Component: Comments,
  },
  {
    name: 'Подписчики',
    path: ADM_SUBSCRIBERS_ROUTE,
    Component: Subscribers,
  },
  {
    name: 'Ссылки',
    path: ADM_LINKS_ROUTE,
    Component: Links,
  },
  {
    name: 'Страницы',
    path: ADM_PAGES_ROUTE,
    Component: AdminPages,
  },
  {
    name: 'Настройки',
    path: ADM_CONFIGS_ROUTE,
    Component: GlobalSettings,
  },
];
