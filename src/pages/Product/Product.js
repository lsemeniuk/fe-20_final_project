import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import { getOneProductOperation } from '../../store/products/operations';
import {
  getOneProductSelector,
  getProductsSelector,
  oneProductLoadingSelector,
  productsLoadingSelector,
} from '../../store/products/selectors';
import ProductImages from './ProductImages/ProductImages';
import Availability from './Availability/Availability';
import ProductColors from './ProductColors/ProductColors';
import ProductPrice from './ProductPrice/ProductPrice';
import OrdersInfo from './OrdersInfo/OrdersInfo';
import CustomSlider from '../../components/sliders/CustomSlider/CustomSlider';
import InfoPanel from './InfoPanel/InfoPanel';
import styles from './Product.module.scss';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import PriceBlock from '../../components/PriceBlock/PriceBlock';

const Product = () => {
  const [tabIndexInfo, setTabIndexInfo] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  const product = useSelector(getOneProductSelector);
  const productLoading = useSelector(oneProductLoadingSelector);

  const params = useParams();

  useEffect(() => {
    dispatch(getOneProductOperation(params.id));
  }, [dispatch]);

  if (productLoading) {
    return (
      <Container>
        <div style={{ height: '60vh' }}>
          <Loader fixed />
        </div>
      </Container>
    );
  }
  const { brand, name, quantity, color, previousPrice, currentPrice, _id: id } = product;

  return (
    <main>
      <Container>
        <div className={styles.breadCrumbs}>
          <NavLink className={styles.crumbsLink} to='/'>
            Главная
          </NavLink>
          <span className={styles.iconBreadcrumbs}>{}</span>
          <NavLink className={styles.crumbsLink} to='/products'>
            Все товары
          </NavLink>
          <span className={styles.iconBreadcrumbs}>{}</span>
          <span className={styles.crumbs}>Смарт часы {brand}</span>
        </div>

        <div>
          <h2 className={styles.categoryTitle}>{name}</h2>
        </div>
      </Container>

      <div className={styles.navBarContainer}>
        <Container>
          <div className={styles.navBarFlex}>
            <nav className={styles.navBarProduct}>
              <span className={styles.navBarItem}>Про товар</span>
              <span className={styles.navBarItem} onClick={() => setTabIndexInfo(0)}>
                Описание
              </span>
              <span className={styles.navBarItem} onClick={() => setTabIndexInfo(1)}>
                Характеристики
              </span>
              <span className={styles.navBarItem} onClick={() => setTabIndexInfo(2)}>
                Отзывы
              </span>
            </nav>
            <div className={styles.navBarOrder}>
              <AddToCartButton id={id} />
              <div className={styles.priceContainer}>
                <PriceBlock previousPrice={previousPrice} currentPrice={currentPrice} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.flexColumn}>
            <ProductImages product={product} />
          </div>

          <div className={styles.flexColumn}>
            <Availability quantity={quantity} />
            <ProductColors color={color} />
            <ProductPrice product={product} />
            <OrdersInfo />
          </div>
        </div>

        <InfoPanel product={product} setTabIndex={setTabIndexInfo} tabIndex={tabIndexInfo} />

        {!productsLoading && <CustomSlider title='Также Вас могут заинтересовать' products={products} />}
      </Container>
    </main>
  );
};

export default Product;
