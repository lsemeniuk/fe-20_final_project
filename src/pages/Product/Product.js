import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import { getOneProductOperation } from '../../store/products/operations';
import { getOneProductSelector, oneProductLoadingSelector } from '../../store/products/selectors';
import ProductImages from './ProductImages/ProductImages';
import Availability from './Availability/Availability';
import ProductColors from './ProductColors/ProductColors';
import ProductPrice from './ProductPrice/ProductPrice';
import OrdersInfo from './OrdersInfo/OrdersInfo';
import CustomSlider from '../../components/sliders/CustomSlider/CustomSlider';
import InfoPanel from './InfoPanel/InfoPanel';
import NavBarProduct from './NavBarProduct/NavBarProduct';
import styles from './Product.module.scss';

const Product = () => {
  const [tabIndexInfo, setTabIndexInfo] = useState(0);
  const infoRef = useRef(null);
  const productRef = useRef(null);
  const interestedRef = useRef(null);

  const dispatch = useDispatch();

  const product = useSelector(getOneProductSelector);
  const productLoading = useSelector(oneProductLoadingSelector);

  const params = useParams();

  useEffect(() => {
    dispatch(getOneProductOperation(params.id));

    const viwedProducts = JSON.parse(localStorage.getItem('viwed_products'));
    const newViwedProducts = [...new Set([params.id, ...viwedProducts])];
    localStorage.setItem('viwed_products', JSON.stringify(newViwedProducts));
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
  const { brand, name, quantity, color } = product;

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
          <h2 className={styles.categoryTitle}>
            {name}, {color}
          </h2>
        </div>
      </Container>

      <NavBarProduct
        product={product}
        setTabIndexInfo={setTabIndexInfo}
        infoRef={infoRef}
        productRef={productRef}
        interestedRef={interestedRef}
      />

      <Container>
        <div className={styles.flexContainer} ref={productRef}>
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

        <div ref={infoRef} className={styles.infoPanel}>
          <InfoPanel product={product} setTabIndex={setTabIndexInfo} tabIndex={tabIndexInfo} />
        </div>

        <div ref={interestedRef} className={styles.slider}>
          <CustomSlider title='Также Вас могут заинтересовать' filter={{ brand: product.brand }} />
          <CustomSlider title='Последние просмотренные товары' viwedProduct />
        </div>
      </Container>
    </main>
  );
};

export default Product;
