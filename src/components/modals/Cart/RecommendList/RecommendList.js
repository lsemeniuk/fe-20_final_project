import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { saveModalCartAction } from '../../../../store/modal/actions';
import { getProductsSelector, productsLoadingSelector } from '../../../../store/products/selectors';
import ProductCardSmall from '../../../ProductCard/ProductCardSmall/ProductCardSmall';
import styles from './RecommendList.module.scss';

const RecommendList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsSelector);
  const productsLoading = useSelector(productsLoadingSelector);

  const closeCart = () => {
    dispatch(saveModalCartAction(false));
  };

  if (productsLoading) {
    return <div>loading</div>;
  }

  const productList = products.map(p => <ProductCardSmall key={p.itemNo} product={p} onClick={closeCart} />);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Также рекомендуем приобрести</h2>
      <Slider className={styles.slider} accessibility infinite speed={700} slidesToShow={5} slidesToScroll={2}>
        {productList}
      </Slider>
    </div>
  );
};

export default RecommendList;
