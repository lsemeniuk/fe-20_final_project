import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCardSmall from '../ProductCardSmall/ProductCardSmall';
import styles from './RecommendList.module.scss';

const RecommendList = () => {
  const [products, setProducts] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios.get('../../products.json').then(res => {
      setProducts([...res.data]);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  const productList = products.map(p => <ProductCardSmall key={p.itemNo} product={p} />);

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
